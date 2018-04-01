import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-uso-directiva-test-snippets',
  templateUrl: './uso-directiva-test-snippets.component.html',
  styles: [`
    em {
      color: Green;
      font-style: normal;
    }
  `]
})
export class TextSnippetComponent {
  codedi; codehtml; codets: string;

  constructor(private http: Http) {
    this.http.get('assets/app/test-snippets.directive.ts')
      .subscribe(data => { this.codedi = data.text(); });
    this.http.get('assets/app/uso-directiva-test-snippets.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/uso-directiva-test-snippets.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }
  movieQuote = `
      Didn’t see the first shark for about a half-hour. Tiger. 13-footer.
      You know how you know that in the water, Chief? You can tell by lookin’
      from the dorsal to the tail. What we didn’t know, was that our bomb
      old calendars like the Battle of Waterloo and the idea was the shark
      come to the nearest man, that man he starts poundin’ and hollerin’
      and sometimes that shark he go away… but sometimes he wouldn’t go away.`;

  text: string;


  onSelected(text: string) {
    this.text = text;
  }
}
