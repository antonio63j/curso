import { Component, ViewChild, Renderer2, ElementRef } from '@angular/core';
import { ViewchildDemo1ChildComponent } from './viewchild-demo1child.component';

@Component({
  selector: 'app-viewchild-demo1',
  templateUrl: './viewchild-demo1.component.html',
  styles: [`
  .advertencia { color: white;
                  background-color: orange; 
                  cursor: not-allowed;
                }

  `]
})
export class ViewchildDemo1Component {

  @ViewChild('botonespecial') botonEspecial: ElementRef;

  @ViewChild(ViewchildDemo1ChildComponent)

  private numberComponent: ViewchildDemo1ChildComponent;

  constructor(private renderer: Renderer2) { }

  // Contador manual
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }

  // Contador automático
  startStopwatch() {
    this.numberComponent.start();
    this.renderer.addClass(this.botonEspecial.nativeElement, 'advertencia');
  }
  stopStopwatch() {
    this.numberComponent.stop();
    this.renderer.removeClass(this.botonEspecial.nativeElement, 'advertencia');
  }
}
