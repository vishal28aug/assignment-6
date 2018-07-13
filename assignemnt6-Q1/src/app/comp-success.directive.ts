import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
import {HostListener} from '@angular/core';



@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) 
  { 

  }

  @HostListener('mouseenter') onmouseenter()
  {
    this.ele.nativeElement.style.color='green';
  }
  

  @HostListener('mouseleave') onmouseleave()
  {
    this.ele.nativeElement.style.color='black';
  }

  


}
