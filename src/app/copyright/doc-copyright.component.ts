import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-copyright',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocCopyrightComponent implements OnInit {
  items: any[] = [
    { title: 'Template', code: '', file: 'assets/app/copyright.component.html' },
    { title: 'Componente', code: '', file: 'assets/app/copyright.component.ts' },
  ];

  constructor(private http: Http) {
    // tslint:disable-next-line:forin
    for (let ind in this.items) {
      const i = ind;
      this.http.get(this.items[i].file)
        .subscribe(data => { this.items[i].code = data.text(); });
    }
  }

  ngOnInit() { }
}
