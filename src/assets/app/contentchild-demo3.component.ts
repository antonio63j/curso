import {Component, ContentChildren, Directive, Input, QueryList} from '@angular/core';

@Directive({selector: 'pane3'})
export class Pane3 {
  @Input() id: string;
}

@Component({
  selector: 'tab3',
  template: `
    <div class="top-level">Top level panes: {{serializedPanes}}</div> 
    <div class="nested">Arbitrary nested panes: {{serializedNestedPanes}}</div>
  `
})
export class Tab3 {
  @ContentChildren(Pane3) topLevelPanes: QueryList<Pane3>;
  @ContentChildren(Pane3, {descendants: true}) arbitraryNestedPanes: QueryList<Pane3>;

  get serializedPanes(): string {
    return this.topLevelPanes ? this.topLevelPanes.map(p => p.id).join(', ') : '';
  }
  get serializedNestedPanes(): string {
    return this.arbitraryNestedPanes ? this.arbitraryNestedPanes.map(p => p.id).join(', ') : '';
  }
}

@Component({
  selector: 'example-app3',
  template: `
    <tab3>
      <pane3 id="1"></pane3>
      <pane3 id="2"></pane3>
      <pane3 id="3" *ngIf="shouldShow">
        <tab3>
          <pane3 id="3_1"></pane3>
          <pane3 id="3_2"></pane3>
        </tab3>
      </pane3>
    </tab3>

    <button (click)="show()">Show 3</button>

    <hr>
    <button type="button" class="btn btn-primary" routerLink="/viewchild">Home</button>

    <!-- Lineas dedicadas a documentacion
  -------------------------------- -->
  <div style="display: inline;" *ngIf="!ocultarFuentes">
    <button type="button" class="btn btn-primary" (click)="mostrarOcultarFuentes()">Ocultar fuentes</button>
    <app-doc-fuentes-componentchild-demo3></app-doc-fuentes-componentchild-demo3>
    <router-outlet></router-outlet>
  </div>
  <div style="display: inline;" *ngIf="ocultarFuentes">
    <button type="button" class="btn btn-primary" (click)="mostrarOcultarFuentes()">Mostrar fuentes</button>
  </div>
  `,
})
export class ContentChildDemo3Component {
  
  shouldShow = false;
  ocultarFuentes = true;

  show() { this.shouldShow = !this.shouldShow; }

  mostrarOcultarFuentes() {
    this.ocultarFuentes = !this.ocultarFuentes;
  }
}