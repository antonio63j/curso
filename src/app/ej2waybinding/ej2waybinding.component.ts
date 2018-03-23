import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ej2waybinding',
  templateUrl: './ej2waybinding.component.html',
  styleUrls: ['./ej2waybinding.component.css']
})

export class Ej2waybindingComponent implements OnInit {
  codehtml; codets: string;

  texto = 'Texto original a cargar';
  numero = 10;

  constructor(private http: Http) {
    this.http.get('assets/app/ej2waybinding.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/ej2waybinding.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }

  ngOnInit() {
  }

  incrementarNumero() {
    this.numero = this.numero + 1;
  }

}
