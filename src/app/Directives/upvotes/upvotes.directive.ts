import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUpvotes]'
})
export class UpvotesDirective {

  constructor(elem : ElementRef) { 
    // if( )
    elem.nativeElement.style.background = "silver";
  }

}
