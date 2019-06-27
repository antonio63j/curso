import { Directive, ElementRef, AfterViewInit, Input, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ColorService } from './services/color.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[appHighlight]'
})

export class DirectivamenuDirective implements AfterViewInit {

  message: any;
  subscription: Subscription;


  @Input('appHighlight') highlightColor: string;
  @Input() defaultColor: string;

  constructor(private elRef: ElementRef,
    private messageService: ColorService) {
    this.subscription = this.messageService.getMessage().subscribe(message => { this.change(message.text); });
  }

  // Si no se hace el cambio aquí, elRef.nativeElement será undefined
  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'black';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.changeBackground(this.highlightColor || this.defaultColor || 'red');
    this.elRef.nativeElement.style.color = 'orange';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackground(null);
    this.elRef.nativeElement.style.color = 'blue';
  }

  change(color: string) {
    this.elRef.nativeElement.style.color = color;
  }

  changeBackground(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}
