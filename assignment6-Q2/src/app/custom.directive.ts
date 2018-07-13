import { Directive } from '@angular/core';
import {ElementRef} from '@angular/core';
import {HostListener} from '@angular/core';



@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private ele:ElementRef) 
  { 
    ele.nativeElement.style.fontWeight= 'bold';
    ele.nativeElement.style.background='yellow';
    
  
  }

 
  


}
