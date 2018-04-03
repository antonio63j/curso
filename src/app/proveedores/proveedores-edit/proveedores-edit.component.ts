import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {ProveedoresService} from '../proveedores.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProveedorModelo } from '../proveedor-modelo';


@Component({
  selector: 'app-proveedores-edit',
  templateUrl: './proveedores-edit.component.html',
  styleUrls: ['./proveedores-edit.component.scss']
})
export class ProveedoresEditComponent implements OnInit {
  // @ViewChild('formprovee') formpro: NgForm;
  @ViewChild('formprovee') proveedor: NgForm;
  // proveedor: ProveedorModelo;
  idEmail: any;
  provincias: string[] = [ 'Álava','Albacete','Alicante','Almería','Asturias',
   'Valladolid', 'Vizcaya', 'Zamora','Zaragoza'];

  constructor(private pf: FormBuilder,
    private proveedoresService: ProveedoresService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    console.log('En constructor de ProveedoresEditComponent');

    this.activatedRouter.params
      .subscribe(parametros => {
        this.idEmail = parametros['email'];
        this.proveedor = this.proveedoresService.getProveedor(this.idEmail);
      });
  }

  ngOnInit() {
  }

  onSubmit() {
    this.proveedoresService.updateProveedor (this.proveedor);
  }

}
