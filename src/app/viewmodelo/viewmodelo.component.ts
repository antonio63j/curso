import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})

export class ViewmodeloComponent implements OnInit, OnChanges {

  desarrollador = new Desarrollador(1, 'Juan', 'Gutiérrez', 'Madrid');
  @Input () textoprueba: string;
  textoprueba2: string;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const textoprueba: SimpleChange = changes.textoprueba;
    console.log('prev value: ', textoprueba.previousValue);
    console.log('last value: ', textoprueba.currentValue);
    this.textoprueba2 = textoprueba.currentValue.toUpperCase();
  }
}
