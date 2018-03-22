import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {
  nombre1:string;
  nombre2:string;
  capital:string;
  constructor() { }

  setResultado(){
    return this.capital === "Madrid"? true: false;
  }

  ngOnInit() {
  }

}
