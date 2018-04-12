import { Component, Input } from '@angular/core';


@Component({
  selector: 'doc-fuentes',
  template: `
  <hr>
  <div class="container-demo">
      <div *ngFor="let item of items">
        <div *ngIf = "item.aread !== undefined">
          <h4>Despcripción del módulo</h4>
          <div innerHtml = "{{item.codeAread}}"></div>
        </div>
      </div>
      <h4>Códigos fuente</h4>
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

