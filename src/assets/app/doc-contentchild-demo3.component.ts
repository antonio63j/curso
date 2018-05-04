import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-componentchild-demo3',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocContentchildDemo3Component implements OnInit {
  items: any[] = [
    {
      title: 'Componente y Template',
      code: '',
      file: 'assets/app/contentchild-demo3.component.ts',
      aread: 'assets/app/doc-contentchild-demo3.html',
      codeAread: ''
    }
  ];

  constructor(private http: Http) {
    // tslint:disable-next-line:forin
    for (const ind in this.items) {
      const i = ind;
      this.http.get(this.items[i].file)
        .subscribe(data => { this.items[i].code = data.text(); });
      if (typeof (this.items[i].aread) !== 'undefined') {
        this.http.get(this.items[i].aread)
          .subscribe(data => { this.items[i].codeAread = data.text(); });
      }
    }
  }

  ngOnInit() { }

}
