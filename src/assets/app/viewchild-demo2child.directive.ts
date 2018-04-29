import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[appHighlight]'
})

export class ViewchildDemo2ChildDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) { }

  @Input ('appHighlight') highlightColor: string; 
  @Input () defaultColor: string;

  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackground(this.highlightColor || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackground(null);
  }

  change(color: string) {
    this.elRef.nativeElement.style.color = color;
  }

  changeBackground(color: string){
    this.elRef.nativeElement.style.backgroundColor = color;

  }

}
