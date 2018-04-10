import { Component } from '@angular/core';

@Component({
  selector: 'app-uso-directiva-confirm',
  templateUrl: './uso-directiva-confirm.component.html',
  styleUrls: ['./uso-directiva-confirm.component.css']
})

export class UsoDirectivaConfirmComponent {

  boxColor = 'grey';

  constructor() {}

  setBoxColor(color: string) {
    return () => this.boxColor = color;
  }

}
