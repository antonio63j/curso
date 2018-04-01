import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-uso-directiva-rainbow',
  templateUrl: './uso-directiva-rainbow.component.html',
  styleUrls: ['./uso-directiva-rainbow.component.css']
})

export class UsoDirectivaRainbowComponent implements OnInit {
  codedi; codehtml; codets: string;

  constructor(private http: Http) {
    this.http.get('assets/app/rainbow-directive.directive.ts')
      .subscribe(data => { this.codedi = data.text(); });
    this.http.get('assets/app/uso-directiva-rainbow.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/uso-directiva-rainbow.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }

  ngOnInit() {
  }

}
