import { Component, Input } from '@angular/core';


@Component({
  selector: 'doc-fuentes',
  template: `
  <h3>Códigos fuente</h3>
  <ul>
      <li *ngFor="let item of items">
      {{item.title}}({{item.file}})
      <pre><code highlight [code]="item.code">Template hijo</code></pre>
      </li>
  </ul>
`
})

export class DocFuentesComponent {
  @Input()
  items: any[] = [];
}

