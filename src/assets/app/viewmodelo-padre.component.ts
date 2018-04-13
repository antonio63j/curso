import { Component, OnInit, OnDestroy } from '@angular/core';

import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo-padre',

  template: `
    <app-viewmodelo [textoprueba]="textopruebaPadre" [desarrollador] ="desarrollador"></app-viewmodelo> 
  `,
})
export class ViewmodeloPadreComponent implements OnInit, OnDestroy {

  textopruebaPadre: string;
  timerInterval: any;
  date: any;
  desarrollador: Desarrollador;

  constructor() { }

  ngOnInit() {
    this.desarrollador = new Desarrollador(1, 'Juan', 'Gutiérrez', 'Madrid');
    this.textopruebaPadre = 'Texto asignado desde el padre';
    this.timerInterval = setInterval(() => { this.testOnChanges(); }, 2000);
   }

  testOnChanges() {
    this.date = Date.now();
    this.textopruebaPadre = 'date: ' + this.date.toString();
    this.desarrollador.nombre = this.date.toString();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    delete this.timerInterval;
  }
}
