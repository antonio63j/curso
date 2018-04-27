import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[directiva-viewchild-demo2child]',
})

export class ViewchildDemo2ChildDirective implements AfterViewInit {

  constructor(private elRef: ElementRef) {

  }
  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'red';
  }

  change(color: string) {
    this.elRef.nativeElement.style.color = color;
  }
}
