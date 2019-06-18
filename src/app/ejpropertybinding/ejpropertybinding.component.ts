import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})

export class EjpropertybindingComponent implements OnInit {
  codehtml; codets: string;

  texto = 'Valor inicial de la variable texto';
  angularLogo = 'https://academia-binaria.com/images/tutorial-angular-5_5_inject.png';

  constructor() {
  }

  ngOnInit() {
    setTimeout(() => { this.texto = 'nuevo valor asingado por el componente'; }, 4000);
   }
}
