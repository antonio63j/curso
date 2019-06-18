import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})

export class EjdirectivangstyleComponent implements OnInit {
  puntuacion: number;
  estiloAplicado: any;

  constructor() { }

  ngOnInit() {
    this.puntuacion = 5;
  }

  setColor() {
    this.estiloAplicado = {
      'font-style': this.puntuacion >= 5 ? 'italic' : 'normal',
      'color': this.puntuacion >= 5 ? 'green' : 'red',
      'font-size': this.puntuacion >= 5 ? '35px' : '12px'
    };
    return this.puntuacion >= 5 ? 'green' : 'red';
  }
}
