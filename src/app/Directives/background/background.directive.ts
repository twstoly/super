import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective {

  constructor(private elem:ElementRef){

  }

  // @HostListener("click") onClick(){
  //   this.highUpvote("black");
  //   this.textColor("white")
  // }
  // @HostListener("dblclick") onDoubleClick(){
  //   this.highUpvote("silver");
  //   this.textColor("black")
  // }


  // private highUpvote(action: string){
  
  //   this.elem.nativeElement.style.background = action;
  // }
  // private textColor(action: string){
  //   this.elem.nativeElement.style.color = action;
  // }
}
