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
      file: 'assets/app/addres.component.ts',
      codeAread: ''
    },
    {
      title: 'Escritor / Writer Componente',
      code: '',
      file: 'assets/app/escritor.component.ts',
      codeAread: ''
    },
    {
      title: 'Favourite-books Componente',
      code: '',
      file: 'assets/app/favourite-books.component.ts',
      codeAread: ''
    },
    {
      title: 'Friend Componente',
      code: '',
      file: 'assets/app/friend.component.ts',
      codeAread: ''
    },
    {
      title: 'Favourtie cities Componente',
      code: '',
      file: 'assets/app/favourite-cities.component.ts',
      codeAread: ''
    },
    {
      title: 'Favourite Friends Componente',
      code: '',
      file: 'assets/app/favourite-friends.component.ts',
      codeAread: ''
    },
    {
      title: 'Template Person Componente',
      code: '',
      file: 'assets/app/person.component.html',
      codeAread: ''
    },
    {
      title: 'Person Componente',
      code: '',
      file: 'assets/app/person.component.ts',
      read: 'assets/app/doc-componentchild-demo1.component.ts',
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
