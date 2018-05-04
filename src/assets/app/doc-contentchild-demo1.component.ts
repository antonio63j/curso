import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes-componentchild-demo1',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocContentchildDemo1Component implements OnInit {
  items: any[] = [
    {
      title: 'Directiva book',
      code: '',
      file: 'assets/app/book.directive.ts'
    },
    {
      title: 'City Component',
      code: '',
      file: 'assets/app/city.component.ts'
    },
    {
      title: 'Addres Componente',
      code: '',
      file: 'assets/app/address.component.ts',
    },
    {
      title: 'Escritor / Writer Componente',
      code: '',
      file: 'assets/app/escritor.component.ts',
    },
    {
      title: 'Favourite-books Componente',
      code: '',
      file: 'assets/app/favourite-books.component.ts',
    },
    {
      title: 'Friend Componente',
      code: '',
      file: 'assets/app/friend.component.ts',

    },
    {
      title: 'Favourtie cities Componente',
      code: '',
      file: 'assets/app/favourite-cities.component.ts',
    },
    {
      title: 'Favourite Friends Componente',
      code: '',
      file: 'assets/app/favourite-friends.component.ts',
    },
    {
      title: 'Template Person Componente',
      code: '',
      file: 'assets/app/person.component.html',
    },
    {
      title: 'Person Componente',
      code: '',
      file: 'assets/app/person.component.ts',
      aread: 'assets/app/doc-contentchild-demo1.html',
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
