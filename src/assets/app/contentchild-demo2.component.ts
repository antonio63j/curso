import {Component, ViewChild, ContentChild, Directive, Input} from '@angular/core';
@Directive ({selector: 'pane',
            }, )

export class Pane {
  @Input() id: string;
}

@Component({
  selector: 'tab',
  template: `
    <div>pane: {{pane?.id}}</div> 
  `
})
export class Tab {
  @ContentChild(Pane) pane: Pane;
}

@Component({
  selector: 'example-app',
  templateUrl: './contentchild-demo2.component.html',
})
export class ContentChildDemo2Component {
  ocultarFuentes = true;
  shouldShow = true;

  toggle() { this.shouldShow = !this.shouldShow; }

  mostrarOcultarFuentes() {
    this.ocultarFuentes = !this.ocultarFuentes;
  }     
}

