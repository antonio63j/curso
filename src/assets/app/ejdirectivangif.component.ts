import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ejdirectivangif',
  templateUrl: './ejdirectivangif.component.html',
  styleUrls: ['./ejdirectivangif.component.css']
})
export class EjdirectivangifComponent implements OnInit {
  codehtml; codets: string;

  nombre1; nombre2; capital: string;
  constructor(private http: Http) {
    this.http.get('assets/app/ejdirectivangif.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/ejdirectivangif.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }

  setResultado() {
    return this.capital === 'Madrid' ? true : false;
  }

  ngOnInit() {
  }

}
