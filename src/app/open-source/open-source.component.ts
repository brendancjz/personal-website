import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

const GITHUB_AUTHOR = 'brendancjz';
const SEARCH_URL = 'https://api.github.com/search/issues';

/** Same path as in-repo `src/assets/open-source/repos.json`, served via GitHub Raw. */
const OPEN_SOURCE_REPOS_REMOTE_URL =
  'https://raw.githubusercontent.com/brendancjz/personal-website/main/src/assets/open-source/repos.json';

/** Bundled copy for local dev / when Raw is unreachable. */
const OPEN_SOURCE_REPOS_ASSET_URL = '/assets/open-source/repos.json';

interface OpenSourceRepoConfig {
  id: string;
  label: string;
  fullName: string;
}

interface OpenSourceReposFile {
  repos: OpenSourceRepoConfig[];
}

interface GithubSearchResponse {
  total_count: number;
  incomplete_results: boolean;
  items: GithubSearchItem[];
}

interface GithubSearchItem {
  html_url: string;
  number: number;
  title: string;
  user: { login: string; avatar_url?: string };
  comments: number;
  repository_url: string;
  pull_request?: { merged_at: string | null };
}

export interface MergedPrView {
  html_url: string;
  number: number;
  title: string;
  authorLogin: string;
  authorAvatarUrl: string;
  comments: number;
  repoFullName: string;
  mergedAt: string;
  mergedLabel: string;
}

type RepoFilterId = 'all' | string;

@Component({
  selector: 'app-open-source',
  templateUrl: './open-source.component.html',
  styleUrls: ['./open-source.component.scss'],
})
export class OpenSourceComponent implements OnInit {
  readonly githubAuthor = GITHUB_AUTHOR;

  /** Filled after `repos.json` is loaded from GitHub Raw (or local asset fallback). */
  repos: OpenSourceRepoConfig[] = [];

  get filterTabs(): { id: RepoFilterId; label: string }[] {
    return [{ id: 'all', label: 'All' }, ...this.repos.map((r) => ({ id: r.id, label: r.label }))];
  }

  selectedFilter: RepoFilterId = 'all';
  loading = false;
  error: string | null = null;
  items: MergedPrView[] = [];
  totalCount = 0;
  incompleteResults = false;

  /** Client-side page size (adjust without changing API calls). */
  readonly pageSize = 10;
  currentPage = 1;

  constructor(private http: HttpClient) {}

  get totalPages(): number {
    return this.items.length ? Math.ceil(this.items.length / this.pageSize) : 0;
  }

  get pagedItems(): MergedPrView[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.items.slice(start, start + this.pageSize);
  }

  get pageRangeLabel(): string {
    if (!this.items.length) {
      return '';
    }
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.items.length);
    return `${start}–${end} of ${this.items.length}`;
  }

  get canPrevPage(): boolean {
    return this.currentPage > 1;
  }

  get canNextPage(): boolean {
    return this.totalPages > 0 && this.currentPage < this.totalPages;
  }

  setPage(page: number): void {
    const tp = this.totalPages;
    const clamped = Math.max(1, Math.min(page, tp || 1));
    if (clamped === this.currentPage) {
      return;
    }
    this.currentPage = clamped;
    this.scrollPrListIntoView();
  }

  prevPage(): void {
    this.setPage(this.currentPage - 1);
  }

  nextPage(): void {
    this.setPage(this.currentPage + 1);
  }

  private resetPagination(): void {
    this.currentPage = 1;
  }

  private scrollPrListIntoView(): void {
    const el = document.getElementById('open-source-pr-list');
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  ngOnInit(): void {
    this.loadReposConfigThenPrs();
  }

  private loadReposConfigThenPrs(): void {
    this.loading = true;
    this.error = null;
    this.http
      .get<OpenSourceReposFile>(OPEN_SOURCE_REPOS_REMOTE_URL)
      .pipe(catchError(() => this.http.get<OpenSourceReposFile>(OPEN_SOURCE_REPOS_ASSET_URL)))
      .subscribe({
        next: (file) => {
          const list = file?.repos;
          if (!this.isValidReposConfig(list)) {
            this.error = 'Repository list config is missing or invalid (expected repos.json).';
            this.repos = [];
            this.items = [];
            this.resetPagination();
            this.loading = false;
            return;
          }
          this.repos = list;
          this.loadPrs();
        },
        error: () => {
          this.error =
            'Could not load repository list from GitHub or local assets. Check repos.json exists and CORS/network.';
          this.repos = [];
          this.items = [];
          this.resetPagination();
          this.loading = false;
        },
      });
  }

  private isValidReposConfig(repos: unknown): repos is OpenSourceRepoConfig[] {
    if (!Array.isArray(repos) || repos.length === 0) {
      return false;
    }
    return repos.every(
      (r) =>
        r &&
        typeof r === 'object' &&
        typeof (r as OpenSourceRepoConfig).id === 'string' &&
        typeof (r as OpenSourceRepoConfig).label === 'string' &&
        typeof (r as OpenSourceRepoConfig).fullName === 'string' &&
        (r as OpenSourceRepoConfig).fullName.includes('/'),
    );
  }

  selectFilter(id: RepoFilterId): void {
    if (this.selectedFilter === id) {
      return;
    }
    this.selectedFilter = id;
    this.loadPrs();
  }

  private buildQueryForRepoFullName(fullName: string): string {
    return `repo:${fullName} is:pr is:merged author:${GITHUB_AUTHOR}`;
  }

  private searchParams(q: string): HttpParams {
    return new HttpParams()
      .set('q', q)
      .set('per_page', '100')
      .set('sort', 'updated')
      .set('order', 'desc');
  }

  loadPrs(): void {
    if (!this.repos.length) {
      return;
    }

    this.loading = true;
    this.error = null;

    if (this.selectedFilter === 'all') {
      const requests = this.repos.map((r) =>
        this.http
          .get<GithubSearchResponse>(SEARCH_URL, {
            params: this.searchParams(this.buildQueryForRepoFullName(r.fullName)),
          })
          .pipe(
            map((body) => ({ ok: true as const, body, message: '' })),
            catchError((err) => {
              const msg =
                err?.error?.message ||
                err?.message ||
                'Could not load pull requests from GitHub.';
              return of({ ok: false as const, body: null as GithubSearchResponse | null, message: msg });
            }),
          ),
      );

      forkJoin(requests).subscribe((results) => {
        const failed = results.find((r) => !r.ok);
        if (failed && !failed.ok) {
          this.error = failed.message;
          this.items = [];
          this.totalCount = 0;
          this.resetPagination();
          this.loading = false;
          return;
        }

        const bodies = results.map((r) => r.body!).filter(Boolean);
        const merged = bodies.flatMap((r) => r.items);
        this.totalCount = bodies.reduce((sum, r) => sum + r.total_count, 0);
        this.incompleteResults = bodies.some((r) => r.incomplete_results);
        this.items = this.toViewModels(merged);
        this.resetPagination();
        this.loading = false;
      });
      return;
    }

    const repo = this.repos.find((r) => r.id === this.selectedFilter);
    if (!repo) {
      this.loading = false;
      return;
    }

    const q = this.buildQueryForRepoFullName(repo.fullName);
    this.http.get<GithubSearchResponse>(SEARCH_URL, { params: this.searchParams(q) }).subscribe({
      next: (res) => {
        this.totalCount = res.total_count;
        this.incompleteResults = res.incomplete_results;
        this.items = this.toViewModels(res.items);
        this.resetPagination();
        this.loading = false;
      },
      error: (err) => {
        this.error =
          err?.error?.message || err?.message || 'Could not load pull requests from GitHub.';
        this.items = [];
        this.resetPagination();
        this.loading = false;
      },
    });
  }

  private toViewModels(raw: GithubSearchItem[]): MergedPrView[] {
    const withMerged = raw.filter((i) => i.pull_request?.merged_at);
    const views = withMerged.map((i) => ({
      html_url: i.html_url,
      number: i.number,
      title: i.title,
      authorLogin: i.user.login,
      authorAvatarUrl: i.user.avatar_url ?? '',
      comments: i.comments,
      repoFullName: this.repoFullNameFromUrl(i.repository_url),
      mergedAt: i.pull_request!.merged_at!,
      mergedLabel: this.relativeTimeMerged(i.pull_request!.merged_at!),
    }));
    views.sort((a, b) => new Date(b.mergedAt).getTime() - new Date(a.mergedAt).getTime());
    return views;
  }

  private repoFullNameFromUrl(repositoryUrl: string): string {
    const prefix = 'https://api.github.com/repos/';
    return repositoryUrl.startsWith(prefix)
      ? repositoryUrl.slice(prefix.length)
      : repositoryUrl;
  }

  private relativeTimeMerged(iso: string): string {
    const then = new Date(iso).getTime();
    const now = Date.now();
    const diffSec = Math.max(0, Math.floor((now - then) / 1000));
    if (diffSec < 60) {
      return 'just now';
    }
    const diffMin = Math.floor(diffSec / 60);
    if (diffMin < 60) {
      return `${diffMin} ${diffMin === 1 ? 'minute' : 'minutes'} ago`;
    }
    const diffHr = Math.floor(diffMin / 60);
    if (diffHr < 48) {
      return `${diffHr} ${diffHr === 1 ? 'hour' : 'hours'} ago`;
    }
    const diffDay = Math.floor(diffHr / 24);
    if (diffDay < 30) {
      return `${diffDay} ${diffDay === 1 ? 'day' : 'days'} ago`;
    }
    const diffMonth = Math.floor(diffDay / 30);
    if (diffMonth < 12) {
      return `${diffMonth} ${diffMonth === 1 ? 'month' : 'months'} ago`;
    }
    const diffYear = Math.floor(diffDay / 365);
    return `${diffYear} ${diffYear === 1 ? 'year' : 'years'} ago`;
  }
}
