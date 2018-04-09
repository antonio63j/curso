import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-ejdirectivangclass',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocEjDirectivangclassComponent implements OnInit {
  items: any[] = [
    { title: 'Template',
      code: '',
      file: 'assets/app/ejdirectivangclass.component.html'
    },
    { title: 'Componente',
      code: '',
      file: 'assets/app/ejdirectivangclass.component.ts',
      aread: 'assets/app/doc-ejdirectivangclass.html',
      codeAread: ''
    }
  ];

  constructor(private http: Http) {
    // tslint:disable-next-line:forin
    for (let ind in this.items) {
      const i = ind;
      this.http.get(this.items[i].file)
        .subscribe(data => { this.items[i].code = data.text(); });
      if (typeof(this.items[i].aread) !== 'undefined') {
        this.http.get(this.items[i].aread)
        .subscribe(data => { this.items[i].codeAread = data.text(); });
      }
    }
  }

  ngOnInit() { }

}
