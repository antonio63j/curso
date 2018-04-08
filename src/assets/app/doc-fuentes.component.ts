import { Component, Input } from '@angular/core';


@Component({
  selector: 'doc-fuentes',
  template: `

  <div>
      <div *ngFor="let item of items">
        <div *ngIf = "item.aread !== undefined">
          <h3>Despcripción del módulo</h3>
          <pre><code highlight [code]="item.codeAread"></code></pre>
        </div>
      </div>
      <h3>Códigos fuente</h3>
      <div *ngFor="let item of items">
        {{item.title}}({{item.file}})
        <pre><code highlight [code]="item.code">Template hijo</code></pre>
      </div>
  </div>
`
})

export class DocFuentesComponent {
  @Input()
  items: any[] = [];
}

