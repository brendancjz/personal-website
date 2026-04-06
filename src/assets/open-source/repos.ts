/**
 * Open-source repo filters are **not** bundled via import. The app loads the list at runtime
 * from GitHub (same file you see under `src/assets/open-source/` in the repo):
 *
 *   https://raw.githubusercontent.com/brendancjz/personal-website/main/src/assets/open-source/repos.json
 *
 * Tree view (browse in browser):
 *   https://github.com/brendancjz/personal-website/tree/main/src/assets/open-source
 *
 * Edit `repos.json`, commit, and push to `main` so deployed sites pick up changes without
 * changing app code. Local `ng serve` falls back to `/assets/open-source/repos.json` if the
 * remote request fails.
 */
export {};
