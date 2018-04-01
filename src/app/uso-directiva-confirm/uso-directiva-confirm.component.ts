import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-uso-directiva-confirm',
  templateUrl: './uso-directiva-confirm.component.html',
  styleUrls: ['./uso-directiva-confirm.component.css']
})

export class UsoDirectivaConfirmComponent {

  codedi; codehtml; codets: string;

  boxColor = 'grey';

  constructor(private http: Http) {
    this.http.get('assets/app/confirm-directive.directive.ts')
      .subscribe(data => { this.codedi = data.text(); });
    this.http.get('assets/app/uso-directiva-confirm.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/uso-directiva-confirm.component.ts')
      .subscribe(data => { this.codets = data.text(); });

  }
  setBoxColor(color: string) {
    return () => this.boxColor = color;
  }

}
