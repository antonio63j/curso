import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ej2waybinding',
  templateUrl: './ej2waybinding.component.html',
  styleUrls: ['./ej2waybinding.component.css']
})

export class Ej2waybindingComponent implements OnInit {
  codehtml; codets: string;

  texto = 'Texto original a cargar';
  numero = 10;

  constructor() {}

  ngOnInit() { }

  incrementarNumero() {
    this.numero = this.numero + 1;
  }

}
