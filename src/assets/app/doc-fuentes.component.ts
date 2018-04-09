import { Component, Input } from '@angular/core';


@Component({
  selector: 'doc-fuentes',
  template: `
  <hr>
  <div class="container-demo">
      <div *ngFor="let item of items">
        <div *ngIf = "item.aread !== undefined">
          <h3>Despcripción del módulo</h3>
          <div innerHtml = "{{item.codeAread}}"></div>
        </div>
      </div>
      <h3>Códigos fuente</h3>
      <div *ngFor="let item of items">
        <h4>{{item.title}}({{item.file}})</h4>
        <pre><code highlight [code]="item.code"></code></pre>
      </div>
  </div>
`
})

export class DocFuentesComponent {
  @Input()
  items: any[] = [];
}

