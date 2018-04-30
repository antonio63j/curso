import { Component, ViewChild } from '@angular/core';
import { ViewchildDemo1ChildComponent } from './viewchild-demo1child.component';

@Component({
  selector: 'app-viewchild-demo1',
  templateUrl: './viewchild-demo1.component.html',
})
export class ViewchildDemo1Component {

  @ViewChild(ViewchildDemo1ChildComponent)

  private numberComponent: ViewchildDemo1ChildComponent;

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
  }
  stopStopwatch() {
    this.numberComponent.stop();
  }
}
