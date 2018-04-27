import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-viewchild-demo1',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocViewchildDemo1Component implements OnInit {
  items: any[] = [
    { title: 'Componente hijo',
      code: '',
      file: 'assets/app/viewchild-demo1child.component.ts'
    },
    { title: 'Template padre',
      code: '',
      file: 'assets/app/viewchild-demo1-component.html'
    },
    { title: 'Componente padre',
      code: '',
      file: 'assets/app/viewchild-demo1.component.ts',
      aread: 'assets/app/doc-viewchild-demo1.html',
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
