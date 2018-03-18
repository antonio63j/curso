import { Component, OnInit } from '@angular/core';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo',
  templateUrl: './viewmodelo.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloComponent implements OnInit{

   desarrollador = new Desarrollador(1, 'Juan', 'Gutiérrez', 'Madrid');

   constructor() { }

   ngOnInit() {
   }

 }
