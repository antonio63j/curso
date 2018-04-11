import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit, OnChanges {

   desarrollador = new Desarrollador(1, 'Juan', 'Gutiérrez', 'Madrid');
   @Input() textoprueba: string;
   constructor() { }

   ngOnInit() {
   }

   ngOnChanges (changes: any): void {
     console.log ('En ViewmodeloComponent.onChange()');
   }

 }
