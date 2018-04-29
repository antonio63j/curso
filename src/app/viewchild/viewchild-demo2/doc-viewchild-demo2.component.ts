import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-viewchild-demo2',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocViewchildDemo2Component implements OnInit {
  items: any[] = [
    { title: 'Directiva',
      code: '',
      file: 'assets/app/viewchild-demo2child.directive.ts'
    },
    { title: 'Template padre',
      code: '',
      file: 'assets/app/viewchild-demo2.component.html'
    },
    { title: 'Componente padre',
      code: '',
      file: 'assets/app/viewchild-demo2.component.ts',
      aread: 'assets/app/doc-viewchild-demo2.html',
      codeAread: ''
    }
  ];

  constructor(private http: Http) {
    // tslint:disable-next-line:forin
    for (const ind in this.items) {
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
