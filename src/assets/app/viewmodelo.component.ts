import { Component, OnInit, OnChanges, Input, SimpleChanges, SimpleChange } from '@angular/core';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})

export class ViewmodeloComponent implements OnInit, OnChanges {

  @Input() textoprueba: string;
  @Input() desarrollador: Desarrollador;

  allMsgChangeLogs: string[] = [];
  allDesarrolladoresChangeLogs: string[] = [];

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {

    // tslint:disable-next-line:forin
    for (const propName in changes) {
      const change = changes[propName];

      const curVal = JSON.stringify(change.currentValue);
      const prevVal = JSON.stringify(change.previousValue);
      const changeLog = `${propName}: currentValue = ${curVal}, previousValue = ${prevVal}`;

      if (propName === 'textoprueba') {
        this.allMsgChangeLogs.push(changeLog);
      } else if (propName === 'desarrollador') {
        this.allDesarrolladoresChangeLogs.push(changeLog);
      }
    }
  }
}
