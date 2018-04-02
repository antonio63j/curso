import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ProveedorModelo} from '../proveedor-modelo';

@Component({
  selector: 'app-proveedores-add',
  templateUrl: './proveedores-add.component.html',
  styleUrls: ['./proveedores-add.component.scss']
})
export class ProveedoresAddComponent implements OnInit {

  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias',
   'Valladolid', 'Vizcaya', 'Zamora','Zaragoza'];
  proveedor2: ProveedorModelo;

  constructor() {
    this.proveedor2 = new ProveedorModelo(
      'antonio',
      '',
      '',
      '',
      '');
  }

  ngOnInit() {
  }

  onSubmit(formpro: any) {
// tanto proveedor2 como formpro contienen los datos del formulario
    this.proveedor2.nombre = formpro.value.nombre;
    this.proveedor2.cif = formpro.value.cif;
    this.proveedor2.direccion = formpro.value.direccion;

    this.proveedor2.provincia = formpro.value.provincia;

    this.proveedor2.email = formpro.value.email;
    console.log(JSON.stringify(formpro.value));
    console.log(JSON.stringify(this.proveedor2));
    // this.formpro.reset();
  }

}
