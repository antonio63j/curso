import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-doc-fuentes',
  template: `
       <doc-fuentes [items]="items"></doc-fuentes>
  `
})

export class DocEj2waybindingComponent implements OnInit {
  items: any[] = [
    { title: 'Vista', code: '', file: 'assets/app/ej2waybinding.component.html' },
    { title: 'Componente', code: '', file: 'assets/app/ej2waybinding.component.ts' },
  ];

  constructor(private http: Http) {
    this.http.get(this.items[0].file)
      .subscribe(data => { this.items[0].code = data.text(); });
    this.http.get(this.items[0].file)
      .subscribe(data => { this.items[0].code = data.text(); });
  }

  ngOnInit() {
  }

}
