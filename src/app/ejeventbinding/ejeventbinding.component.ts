import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejeventbinding',
  templateUrl: './ejeventbinding.component.html',
  styleUrls: ['./ejeventbinding.component.css']
})
export class EjeventbindingComponent implements OnInit {
  constructor() { }

  texto = 'Pulsa en el botón para modificar esto';
  modTexto() {
    if (this.texto === 'arriba')
      this.texto = 'abajo';
    else
      this.texto = 'arriba';
  }

  ngOnInit() {
}


}
