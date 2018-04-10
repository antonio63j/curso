import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-uso-directiva-test-snippets',
  templateUrl: './uso-directiva-test-snippets.component.html',
  styleUrls: ['./uso-directiva-test-snippets.component.css'],
  styles: [`
    em {
      color: Green;
      font-style: normal;
    }
  `]

})
export class TextSnippetComponent {

  constructor() { }
  movieQuote = `
      Didn’t see the first shark for about a half-hour. Tiger. 13-footer.
      You know how you know that in the water, Chief? You can tell by lookin’
      come to the nearest man, that man he starts poundin’ and hollerin’
      and sometimes that shark he go away… but sometimes he wouldn’t go away.`;

  text: string;

  onSelected(text: string) {
    this.text = text;
  }
}
