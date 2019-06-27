import { Component, ViewChild } from '@angular/core';
import { DirectivamenuDirective} from './viewchild-demo2child.directive';
import { ColorService } from './services/color.service';

@Component({
  selector: 'app-viewchild-demo2',
  templateUrl: './viewchild-demo2.component.html'
})


export class ViewchildDemo2Component {
  ocultarFuentes = true;
  color: string;

  constructor(private messageService: ColorService) {
  }

  @ViewChild(DirectivamenuDirective)
  private cpColorDirective: DirectivamenuDirective;

  changeColor(color: string) {
    this.messageService.sendMessage(color);
  }

  mostrarOcultarFuentes() {
    this.ocultarFuentes = !this.ocultarFuentes;
  }
}

