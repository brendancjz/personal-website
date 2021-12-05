import { Component, OnInit, HostListener, EventEmitter } from '@angular/core';
import { Directive, Output, ElementRef } from '@angular/core';

@Directive({ selector: '[toggleButton]' })
export class ToggleButton implements OnInit {
  // not much going on here as well...
  constructor(private el: ElementRef) { }

  ngOnInit(): void {
  }

  clickedToggleButton: boolean = false;

  @Output()
  clickOutside: EventEmitter<Event> = new EventEmitter<Event>();

  @HostListener('click')
  clickInside() {
    this.clickedToggleButton = true;
  }

  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if(!this.el.nativeElement.contains(event.target) && this.clickedToggleButton) {
      // Clicked Outside and Toggle button was clicked before
       this.clickedToggleButton = false;
       this.clickOutside.emit(event);
      }
  }

}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  //TopNav should be showing if window is > 600
  isSmallScreenSize: boolean = window.innerWidth <= 600;
  showingTopNav: boolean = !this.isSmallScreenSize

  constructor() { }

  ngOnInit(): void {

  }

  toggleTopNav() {
    if (this.showingTopNav) {
      this.showingTopNav = false;

    } else {
      this.showingTopNav = true;

    }
  }

  hideTopNav() {
    this.showingTopNav = false;
  }

  newPageEvent() {
    this.showingTopNav = !this.isSmallScreenSize;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isSmallScreenSize = window.innerWidth <= 600;
    this.showingTopNav = !this.isSmallScreenSize;
  }
}
