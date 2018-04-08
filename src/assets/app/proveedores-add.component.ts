import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { ProveedorModelo} from '../proveedor-modelo';
import { ProveedoresService } from '../proveedores.service';
import { PROVINCIAS } from '../provincias-mock';

@Component({
  selector: 'app-proveedores-add',
  templateUrl: './proveedores-add.component.html',
  styleUrls: ['./proveedores-add.component.scss']
})
export class ProveedoresAddComponent implements OnInit {

  modeloProveedor: ProveedorModelo;
  provincias: {}[] = PROVINCIAS;

  constructor(private proveedorServicio: ProveedoresService,
              private router: Router) {
    this.modeloProveedor = new ProveedorModelo('', '', '', '', '');
  }

  ngOnInit() {
  }

  onSubmit(formpro: any) {
// tanto   modeloProveedor como formpro contienen los datos del formulario
    // this   modeloProveedor.nombre = formpro.value.nombre;
    // this   modeloProveedor.cif = formpro.value.cif;
    // this   modeloProveedor.direccion = formpro.value.direccion;

    // this   modeloProveedor.provincia = formpro.value.provincia;

    // this   modeloProveedor.email = formpro.value.email;
    // console.log(JSON.stringify(formpro.value));
    // console.log(JSON.stringify(this   modeloProveedor));
    // this.formpro.reset();
    this.proveedorServicio.addProveedor (this.modeloProveedor);
    this.router.navigate(['proveedoreshome']);
  }

}
