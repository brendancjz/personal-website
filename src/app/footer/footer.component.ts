import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  hasPageBeenScrolledDown = window.scrollY >= 500;
  isScrollEventListenerAdded = false;

  constructor() {}

  ngOnInit(): void {
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
