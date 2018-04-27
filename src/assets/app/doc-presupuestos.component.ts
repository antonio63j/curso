import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-presupuestos',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocPresupuestosComponent implements OnInit {
  items: any[] = [
    {
      title: 'Template vista principal',
      code: '',
      file: 'assets/app/presupuestos-principal.component.html',
    },
    {
      title: 'Componente vista principal',
      code: '',
      file: 'assets/app/presupuestos-principal.component.ts',
      aread: 'assets/app/doc-presupuestos.html',
      codeAread: ''
    },
    {
      title: 'Template addpres',
      code: '',
      file: 'assets/app/addpres.component.html'
    },
    {
      title: 'Componente addpres',
      code: '',
      file: 'assets/app/addpres.component.ts'
    },
    {
      title: 'Template editpres',
      code: '',
      file: 'assets/app/editpres.component.html'
    },
    {
      title: 'Componente editpres',
      code: '',
      file: 'assets/app/editpres.component.ts'
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
