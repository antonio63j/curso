import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-comunicacion-observable',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocComunicacionObservableComponent implements OnInit {
  items: any[] = [
    {
      title: 'Servicio',
      code: '',
      file: 'assets/app/message.service.ts'
    },
    {
      title: 'Template del emisor',
      code: '',
      file: 'assets/app/emisor.component.html'
    },
    {
      title: 'Componente del emisor',
      code: '',
      file: 'assets/app/emisor.component.ts',
      aread: 'assets/app/doc-comunicacion-observable.html',
      codeAread: ''
    },
    {
      title: 'Template de uno de los receptores',
      code: '',
      file: 'assets/app/receptor1.component.html'
    },
    {
      title: 'Componente de uno de los receptores',
      code: '',
      file: 'assets/app/receptor1.component.ts'
    }

  ];

constructor(private http: Http) {
  // tslint:disable-next-line:forin
  for (let ind in this.items) {
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
