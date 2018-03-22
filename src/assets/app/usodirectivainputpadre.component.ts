import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-usodirectivainputpadre',
  templateUrl: './usodirectivainputpadre.component.html',
  styleUrls: ['./usodirectivainputpadre.component.css']
})

export class UsodirectivainputpadreComponent implements OnInit {
  codePadrets: string;
  codePadrehtml: string;
  codeHijots: string;
  codeHijohtml: string;

  tituloEsPropiedadDelPadre: string = 'Avisos';
  avisosEsPropiedadDelPadre: string[] = ['Aviso 1', 'Aviso 2', 'Aviso 3'];

  constructor(private http: Http) {
    this.http.get('assets/app/usodirectivainputhijo.component.html')
      .subscribe(data => { this.codeHijohtml = data.text(); });
    this.http.get('assets/app/usodirectivainputhijo.component.ts')
      .subscribe(data => { this.codeHijots = data.text(); });
    this.http.get('assets/app/usodirectivainputpadre.component.html')
      .subscribe(data => { this.codePadrehtml = data.text(); });
    this.http.get('assets/app/usodirectivainputpadre.component.ts')
      .subscribe(data => { this.codePadrets = data.text(); });
  }
  ngOnInit() {
  }

}
