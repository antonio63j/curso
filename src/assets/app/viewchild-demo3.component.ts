import { Component, ViewChild } from '@angular/core';
import { ViewchildDemo1ChildComponent } from '../viewchild-demo1/viewchild-demo1child.component';
import { DirectivamenuDirective } from '../viewchild-demo2/viewchild-demo2child.directive';

@Component({
  selector: 'app-viewchild-demo3',
  templateUrl: './viewchild-demo3.component.html'
})

export class ViewchildDemo3Component {

  @ViewChild(DirectivamenuDirective)
  private cpColorDirective: DirectivamenuDirective;

  @ViewChild(ViewchildDemo1ChildComponent)
  private numberComponent: ViewchildDemo1ChildComponent;

  // Uso método de directiva
  changeColor(color: string) {this.cpColorDirective.change(color);
  }

  // Contador manual
  increase() {this.numberComponent.increaseByOne();
  }
  decrease() {this.numberComponent.decreaseByOne();
  }

  // Contador automático
  startStopwatch() {
    this.numberComponent.start();
  }
  stopStopwatch() {
    this.numberComponent.stop();
  }
}
