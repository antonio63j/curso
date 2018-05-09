import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-proveedores-header',
  templateUrl: './proveedores-header.component.html',
  styleUrls: ['./proveedores-header.component.scss']
})
export class ProveedoresHeaderComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit() { }

  ngOnDestroy () {
    console.log ('En ngOnDestroy');
  }



}
