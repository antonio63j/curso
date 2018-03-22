import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-ejdirectivangfor',
  templateUrl: './ejdirectivangfor.component.html',
  styleUrls: ['./ejdirectivangfor.component.css']
})

export class EjdirectivangforComponent implements OnInit {
  cursos: string[];
  precios: number[];
  codets: string;
  codehtml: string;

  constructor(private http: Http) {
    this.cursos = ['java', 'cobol', 'angular'];
    this.precios = [10.5, 11.6, 2.125];

    this.http.get('assets/app/ejdirectivangfor.component.ts')
                 .subscribe(data => {this.codets = data.text(); });
    this.http.get('assets/app/ejdirectivangfor.component.html')
                .subscribe(data => {this.codehtml = data.text(); });
  }

  ngOnInit() {
  }
}
