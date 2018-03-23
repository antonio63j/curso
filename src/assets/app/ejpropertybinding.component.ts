import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})

export class EjpropertybindingComponent implements OnInit {
  codehtml; codets: string;

  texto = 'Escribe algo';
  angularLogo = 'https://academia-binaria.com/images/tutorial-angular-5_5_inject.png';
  constructor(private http: Http) {
     setTimeout(() => { this.texto = 'por favor...'; }, 3000);

     // Para documentar
    this.http.get('assets/app/ejpropertybinding.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/ejpropertybinding.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }

  ngOnInit() {
  }

}
