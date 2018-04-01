import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appConfirmDirective]'
})

export class ConfirmDirectiveDirective {
  @Input('appConfirmDirective') message = 'Are you sure?';
  @Input() functionToRun = () => { };

  @HostListener('click')
  confirm() {
    if (window.confirm(this.message)) {
      this.functionToRun();
    }
  }
}
