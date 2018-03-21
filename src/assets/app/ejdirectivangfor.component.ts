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
  code: string;
  // code = `
  
  // constructor(private http: Http) {
  //   this.cursos = ['java', 'cobol', 'angular'];
  //   this.precios = [10.5, 11.6, 2.125];
  // }
  //   ngOnInit() {

  //     }
  
  // `
  
  constructor(private http: Http) {
    this.cursos = ['java', 'cobol', 'angular'];
    this.precios = [10.5, 11.6, 2.125];

    this.http.get('assets/app/f1.txt').subscribe(data => {
      this.code = data.text();
  })


  }
    ngOnInit() {

      }
}
