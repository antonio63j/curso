import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-testdirectivamenu',
  templateUrl: './testdirectivamenu.component.html',
  styleUrls: ['./testdirectivamenu.component.css']
})
export class TestdirectivamenuComponent implements OnInit {
  codets: string;
  codehtml: string;
  codedi: string;

  constructor(private http: Http, ) {
    this.http.get('assets/app/directivamenu.directive.ts')
    .subscribe(data => { this.codedi = data.text(); });
    this.http.get('assets/app/testdirectivamenu.component.ts')
      .subscribe(data => { this.codets = data.text(); });
    this.http.get('assets/app/testdirectivamenu.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
  }

  ngOnInit() {

  }
}
