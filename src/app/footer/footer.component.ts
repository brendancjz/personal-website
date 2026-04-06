import { Component, HostListener, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { of } from 'rxjs';
import { catchError, timeout } from 'rxjs/operators';

const CV_REMOTE_URL =
  'https://raw.githubusercontent.com/brendancjz/personal-website/main/src/assets/resume/Chia_Jun_Zhe_Brendan_Resume.pdf';

const CV_LOCAL_URL = '/assets/resume/Chia_Jun_Zhe_Brendan_Resume.pdf';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  hasPageBeenScrolledDown = window.scrollY >= 500;
  isScrollEventListenerAdded = false;

  /** Prefer GitHub Raw; downgrade to bundled asset if unreachable or CORS blocks the check. */
  cvHref = CV_REMOTE_URL;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .head(CV_REMOTE_URL, { observe: 'response' })
      .pipe(
        timeout(5000),
        catchError(() => of(null)),
      )
      .subscribe((res: HttpResponse<unknown> | null) => {
        if (!res || res.status !== 200) {
          this.cvHref = CV_LOCAL_URL;
        }
      });
  }

  @HostListener('window:scroll', ['$event'])
  onWindowResize() {

    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const rootElement = document.documentElement;

    if (this.hasPageBeenScrolledDown && !this.isScrollEventListenerAdded) {
      function scrollToTop() {
        rootElement.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      }

      scrollToTopBtn!.addEventListener('click', scrollToTop);
      this.isScrollEventListenerAdded = true;
    } else if (!this.hasPageBeenScrolledDown) {
      this.isScrollEventListenerAdded = false;
    }

    this.hasPageBeenScrolledDown = window.scrollY >= 500;
  }
}
