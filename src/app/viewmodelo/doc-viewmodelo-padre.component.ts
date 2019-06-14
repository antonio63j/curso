import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-viewmodelo-padre',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocViewmodeloPadreComponent implements OnInit {
  items: any[] = [
    {
      title: 'Vista hijo',
      code: '',
      file: 'assets/app/viewmodelo.component.html'
    },
    {
      title: 'Componente hijo',
      code: '',
      file: 'assets/app/viewmodelo.component.ts'
    },
    {
      title: 'Vista padre',
      code: '',
      file: 'assets/app/viewmodelo-padre.component.html'
    },
    {
      title: 'Componente padre',
      code: '',
      file: 'assets/app/viewmodelo-padre.component.ts',
      aread: 'assets/app/doc-viewmodelo.html',
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
