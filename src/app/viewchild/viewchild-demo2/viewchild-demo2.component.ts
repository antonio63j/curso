import { Component, ViewChild } from '@angular/core';
import { ViewchildDemo2ChildDirective } from './viewchild-demo2child.directive';

@Component({
  selector: 'app-viewchild-demo2',
  templateUrl: './viewchild-demo2.component.html',
})

export class ViewchildDemo2Component {
  ocultarFuentes = true;
  color: string;

  @ViewChild(ViewchildDemo2ChildDirective)
  private cpColorDirective: ViewchildDemo2ChildDirective;

  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }

  mostrarOcultarFuentes() {
    this.ocultarFuentes = !this.ocultarFuentes;
  }
}

