import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-usodirectivainputpadre',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocUsodirectivainputpadreComponent implements OnInit {
  items: any[] = [
    { title: 'Template del hijo',
      code: '',
      file: 'assets/app/usodirectivainputhijo.component.html'
    },
    { title: 'Componente hijo',
      code: '',
      file: 'assets/app/usodirectivainputhijo.component.ts'
    },
    { title: 'Template del padre',
    code: '',
    file: 'assets/app/usodirectivainputpadre.component.html'
    },
    { title: 'Componente padre',
      code: '',
      file: 'assets/app/usodirectivainputpadre.component.ts',
      aread: 'assets/app/doc-usodirectivainputpadre.html',
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
