import { Component, OnInit, OnDestroy } from '@angular/core';
/* import { NgForm } from '@angular/forms';*/
import { ProveedoresService } from '../proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedorModelo } from '../proveedor-modelo';

import { PROVINCIAS } from '../../mock-data/provincias-mock';

@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.scss']
})
export class ProveedoresEditComponent implements OnInit, OnDestroy {
  modeloProveedor: ProveedorModelo;
  proveedor: ProveedorModelo;
  idEmail: any;
  provincias: {}[] = PROVINCIAS;

  constructor(
    private proveedoresService: ProveedoresService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.activatedRouter.params
      .subscribe(parametros => {
        this.idEmail = parametros['email'];
        this.proveedor = this.proveedoresService.getProveedor(this.idEmail);
        this.cargaModeloProveedor();
      });
  }

  ngOnInit() { }

  onSubmit() {
    this.proveedoresService.updateProveedor(this.modeloProveedor);
    this.router.navigate(['proveedoreshome']);

  }
  cargaModeloProveedor() {
    this.modeloProveedor = new ProveedorModelo(
      this.proveedor.nombre,
      this.proveedor.direccion,
      this.proveedor.provincia,
      this.proveedor.email,
      this.proveedor.cif);
  }

  ngOnDestroy () {
    console.log( 'En ngOnDestroy de ProveedoresEditComponent');
  }


}
