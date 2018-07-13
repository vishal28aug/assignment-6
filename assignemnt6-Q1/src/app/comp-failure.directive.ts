import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
import {HostListener} from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {

  constructor(private ele:ElementRef)
   {

    }
    @HostListener('mouseenter') onmouseenter()
    {
      this.ele.nativeElement.style.color="red";

    }
    @HostListener('mouseleave') onmouseleave()
    {
      this.ele.nativeElement.style.color="black";
    }

}
