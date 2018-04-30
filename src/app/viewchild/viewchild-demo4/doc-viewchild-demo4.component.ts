import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-viewchild-demo4',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocViewchildDemo4Component implements OnInit {
  items: any[] = [
    { title: 'Template principal',
      code: '',
      file: 'assets/app/cp1.component.html'
    },
    { title: 'Directiva message',
      code: '',
      file: 'assets/app/message.directive.ts'
    },
    { title: 'Componente hijo writer',
      code: '',
      file: 'assets/app/writer.component.ts',
      codeAread: ''
    },
    { title: 'Componente principal',
    code: '',
    file: 'assets/app/cp1.component.ts',
    aread: 'assets/app/doc-viewchild-demo4.html',
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
