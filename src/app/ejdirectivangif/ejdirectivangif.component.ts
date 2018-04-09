import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {

  nombre1; nombre2; capital: string = 'Toledo';
  constructor() { }

  setResultado() {
    return this.capital === 'Madrid' ? true : false;
  }

  ngOnInit() {
  }

}
