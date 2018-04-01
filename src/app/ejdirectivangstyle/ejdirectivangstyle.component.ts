import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ejdirectivangstyle',
  templateUrl: './ejdirectivangstyle.component.html',
  styleUrls: ['./ejdirectivangstyle.component.css']
})

export class EjdirectivangstyleComponent implements OnInit {
  codehtml; codets: string;

  puntuacion: number;
  estiloAplicado: any;

  constructor(private http: Http) {
    this.http.get('assets/app/ejdirectivangstyle.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/ejdirectivangstyle.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }

  setColor() {
    this.estiloAplicado = {
      'font-style': this.puntuacion >= 5 ? 'italic' : 'normal',
      'color': this.puntuacion >= 5 ? 'green' : 'red',
      'font-size': this.puntuacion >= 5 ? '35px' : '12px'
    };
    return this.puntuacion >= 5 ? 'green' : 'red';
  }

  ngOnInit() {
  }
}
