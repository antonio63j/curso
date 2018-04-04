import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import {ProveedoresService} from '../proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedorModelo } from '../proveedor-modelo';


@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.scss']
})
export class ProveedoresEditComponent implements OnInit {
  modeloProveedor: ProveedorModelo;
  proveedor: ProveedorModelo;
  idEmail: any;
  codigoProvincia: string;

  provincias: {}[] = [
    {codigo: 'MA', descripcion: 'MADRID'},
    {codigo: 'BI', descripcion: 'BILBAO'}
  ];

  constructor(
    private proveedoresService: ProveedoresService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    console.log('En constructor de ProveedoresEditComponent');

    this.activatedRouter.params
      .subscribe(parametros => {
        this.idEmail = parametros['email'];
        this.modeloProveedor = this.proveedoresService.getProveedor(this.idEmail);
       // this.cargaModeloProveedor();
        this.codigoProvincia = this.modeloProveedor.provincia;
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('En ProveedoresEditComponent.onSumit()');
    this.proveedoresService.updateProveedor (this.modeloProveedor);
  }
  cargaModeloProveedor() {
    this.modeloProveedor = new ProveedorModelo(
      this.proveedor.nombre,
      this.proveedor.direccion,
      this.proveedor.provincia,
      this.proveedor.email,
      this.proveedor.cif);
    console.log('ProveedoresEditComponent.cargaModeloProveedor: ' +
       JSON.stringify(this.modeloProveedor));
  }

}
