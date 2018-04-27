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
  // Procs. para el contador manual
  increaseByOne() { ++this.count; }
  decreaseByOne() { --this.count; }

  // Procs. para contador automático
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
