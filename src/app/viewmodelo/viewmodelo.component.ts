import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})

export class ViewmodeloComponent implements OnInit, OnChanges {

  @Input () textoprueba: string;
  @Input () desarrollador: Desarrollador;
  textoprueba2: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const textoprueba: SimpleChange = changes.textoprueba;
    console.log(' textoprueba.previousValue: ', textoprueba.previousValue);
    console.log('textoprueba.currentValue: ', textoprueba.currentValue);
    console.log('textoprueba: ', textoprueba);
    console.log('this.desarrollador.nombre:', this.desarrollador.nombre);
    this.textoprueba2 = textoprueba.currentValue.toUpperCase();
  }
}
