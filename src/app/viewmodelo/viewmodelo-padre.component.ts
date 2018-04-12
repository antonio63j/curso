import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-viewmodelo-padre',

  template: `
    <app-viewmodelo [textoprueba]="textopruebaPadre"></app-viewmodelo> 
  `,
})
export class ViewmodeloPadreComponent implements OnInit, OnDestroy {

  textopruebaPadre: string;
  timerInterval: any;
  date: any;

  constructor() {
    this.textopruebaPadre = 'Texto asignado desde el padre';
    this.timerInterval = setInterval(() => { this.testOnChanges(); }, 2000);
  }

  ngOnInit() { }

  testOnChanges() {
    this.date = Date.now();
    this.textopruebaPadre = 't' + this.date.toString();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    delete this.timerInterval;
  }
}
