import { Component } from '@angular/core';

@Component({
  selector: 'app-viewchild-demo1child',
  template: `
    <b>Contador manual : {{count}}</b> 
    <br/>
    <b>Contador automático : {{count2}}</b>
  `,

})

export class ViewchildDemo1ChildComponent {

  message: string = '';
  count: number = 0;
  // Proc. para el contador
  increaseByOne() { ++this.count; }
  decreaseByOne() { --this.count; }

  shouldRun: boolean = false;
  count2: number = 0;
  start() {
    this.shouldRun = true;
    const interval = setInterval(() => {
      if (this.shouldRun === false) {
        clearInterval(interval);
      }
      this.count2 = this.count2 + 1;
    }, 1000);
  }
  stop() {
    this.shouldRun = false;
  }

}
