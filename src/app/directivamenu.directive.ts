import {Directive, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appDirectivamenu]'
})
export class DirectivamenuDirective {

  @HostBinding ('class.item-orange') private mostrar: boolean = false;

  @HostListener('mouseover') onOver() {
    this.mostrar = true;
  }
  @HostListener('mouseout') onOut() {
    this.mostrar = false;
  }
}
