import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejdirectivangclass',
  templateUrl: './ejdirectivangclass.component.html',
  styles: [`
  .advertencia { color: white;
                  background-color:
                  orange; padding: 10px; }
  .aprobado { color: white;
               background-color: green;
               padding: 10px; }
  .suspenso { color: white;
               background-color: red;
               padding: 10px; }
  `]

})
export class EjdirectivangclassComponent implements OnInit {

  puntuacion: number;

  constructor() { }

  ngOnInit() {
  }
}
