import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-usodirectivainputhijo',
  // tslint:disable-next-line:use-input-property-decorator
  inputs: ['avisoPropiedadDelHijo'],
  templateUrl: './usodirectivainputhijo.component.html',
  styleUrls: ['./usodirectivainputhijo.component.css']
})
export class UsodirectivainputhijoComponent implements OnInit {
  @Input() tituloPropiedadDelHijo: string;
  avisoPropiedadDelHijo: string;

  constructor() { }

  ngOnInit() {
  }

}
