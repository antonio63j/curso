import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'tlist-demo',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocFuentesTestComponent implements OnInit {
  items: any[] = [
    { title: 'Directiva', code: '', file: 'assets/app/test-snippets.directive.ts'},
    { title: 'Item 2', code: '', file: 'fichero.txt'},
    { title: 'Item 3', code: '', file: 'fichero.txt'},
  ];

  constructor(private http: Http) {
    this.http.get(this.items[0].file)
      .subscribe(data => { this.items[0].code = data.text(); });
  }

  ngOnInit() {
  }

}
