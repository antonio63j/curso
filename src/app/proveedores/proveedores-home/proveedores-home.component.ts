import { Component, OnInit } from '@angular/core';

import { ProveedoresService } from '../proveedores.service';
import { FuentesDef } from '../../doc-fuentes/fuentes-def';

@Component({
  selector: 'app-proveedores-home',
  templateUrl: './proveedores-home.component.html',
  styleUrls: ['./proveedores-home.component.scss'],
  // providers: [ProveedoresService]

})
export class ProveedoresHomeComponent implements OnInit {
  mensaje: string;
  proveedores: any;

  // Para documentacion
  fuentesDoc: FuentesDef[];


  constructor(private proveedoresService: ProveedoresService) {
    this.fuentesDoc = [
      new FuentesDef ('f1.txt', 'descripcion fichero 1')
    ];
  }

  ngOnInit() {
    this.mensaje = this.proveedoresService.getVersion();
    this.proveedores = this.proveedoresService.getProveedores();
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {

  }
}
