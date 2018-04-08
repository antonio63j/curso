import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-ejpropertybinding',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocEjpropertybindingComponent implements OnInit {
  items: any[] = [
    { title: 'Template', code: '', file: 'assets/app/ejpropertybinding.component.html' },
    { title: 'Componente', code: '', file: 'assets/app/ejpropertybinding.component.ts' },
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
