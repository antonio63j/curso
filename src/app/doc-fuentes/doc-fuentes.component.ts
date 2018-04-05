import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FuentesDef } from './fuentes-def';

@Component({
  selector: 'app-doc-fuentes',
  templateUrl: './doc-fuentes.component.html',
  styleUrls: ['./doc-fuentes.component.scss']
})

export class DocFuentesComponent implements OnInit {
  @Input () fichero: string;
  @Input () descripcion: string;

  constructor(private http: Http) {

   }

  ngOnInit() {
    console.log ('fichero:' + this.fichero);
  }

}
