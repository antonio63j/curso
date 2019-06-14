import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo-padre',
  templateUrl: './viewmodelo-padre.component.html',
  styleUrls: ['./viewmodelo.component.css']
})
export class ViewmodeloPadreComponent implements OnInit, OnDestroy {

  textopruebaPadre: string;
  timerInterval: any;
  date: any;
  desa: Desarrollador;

  constructor() { }

  ngOnInit() {
    this.desa = new Desarrollador(1, 'Juan', 'Gutiérrez', 'Madrid');
    this.textopruebaPadre = 'Texto asignado desde el padre';
    this.timerInterval = setInterval(() => { this.testOnChanges(); }, 2000);
   }

  onFormSubmit(desaForm: NgForm) {
    const nombre = desaForm.controls['nombre'].value;
    const apellidos = desaForm.controls['apellidos'].value;
    const ciudad = desaForm.controls['ciudad'].value;
    this.desa = new Desarrollador(1, nombre, apellidos, ciudad);
  }

  testOnChanges() {
    this.date = Date.now();
    this.textopruebaPadre = 'date: ' + this.date.toString();
    this.desa.nombre = this.date.toString();
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
    delete this.timerInterval;
  }
}
