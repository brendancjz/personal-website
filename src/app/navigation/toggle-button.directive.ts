
import { Directive, HostListener } from '@angular/core';

@Directive({selector: '[toggleButton]'})
export class ToggleButton {
  // not much going on here as well...
  @HostListener('mouseenter') 
  onMouseEnter() {
    alert("Don't touch my bacon!");
  }
}