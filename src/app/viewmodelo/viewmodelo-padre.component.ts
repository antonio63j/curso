import { Component, OnInit } from '@angular/core';
import { Desarrollador } from '../modelo/desarrollador.modelo';

@Component({
  selector: 'app-viewmodelo-padre',
  
  template: `
    <app-viewmodelo [textoprueba]="textopruebaPadre"></app-viewmodelo> 
  `,
})
export class ViewmodeloPadreComponent implements OnInit {

  desarrollador = new Desarrollador(1, 'Juan', 'Gutiérrez', 'Madrid');
  textopruebaPadre: string = 'valor por componente padre';
  constructor() {

  }

  ngOnInit() {
    this.testOnChanges();
  }

  testOnChanges() {
    let date: Date;
      //  while (true) {
      setTimeout(() => {    // <<<---    using ()=> syntax
        // date = new (Date);
        this.textopruebaPadre =  "hola";
        console.log("despues del settimeout()");
      }, 3000);
  
    console.log(`date: ${this.textopruebaPadre}`);
  }
}
