import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejpropertybinding',
  templateUrl: './ejpropertybinding.component.html',
  styleUrls: ['./ejpropertybinding.component.css']
})
export class EjpropertybindingComponent implements OnInit {

  texto = 'Escribe algo';
  angularLogo = 'https://academia-binaria.com/images/tutorial-angular-5_5_inject.png';
  constructor() { setTimeout(() => { this.texto = 'por favor...'; }, 3000); 
  }

  ngOnInit() {

  }

}
