import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  nombre1; nombre2; capital = 'Toledo';
  constructor() {
    this.nombre1 = 'Pepe';
   }

  sendnombre1 (nombre: string) {
    this.nombre1 = 'Recibido ' + nombre;
  }

  mostrarVarsEnLog() {
    console.log('nombre1= ', this.nombre1);
    console.log('nombre2= ', this.nombre2);
  }

  setResultado() {
    return this.capital === 'Madrid' ? true : false;
  }

  ngOnInit() {
  }

}
