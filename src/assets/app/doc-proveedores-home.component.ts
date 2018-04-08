import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocProveedoresHomeComponent implements OnInit {
  items: any[] = [
    { title: 'Template',   code: '',   file: 'assets/app/proveedores-home.component.html' },
    { title: 'Componente', code: '',   file: 'assets/app/proveedores-home.component.ts' },
  ];

  constructor(private http: Http) {
    // tslint:disable-next-line:forin
    for (const ind in this.items) {
      const i = ind;
      this.http.get(this.items[i].file)
        .subscribe(data => { this.items[i].code = data.text(); });
    }
  }

  ngOnInit() {  }
}
