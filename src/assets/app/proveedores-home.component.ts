import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProveedoresService } from '../proveedores.service';

@Component({
  selector: 'app-proveedores-home',
  templateUrl: './proveedores-home.component.html',
  styleUrls: ['./proveedores-home.component.scss'],
  // providers: [ProveedoresService]

})
export class ProveedoresHomeComponent implements OnInit, OnDestroy {
  mensaje: string;
  proveedores: any[] = [];
  constructor(private proveedoresService: ProveedoresService) {
  }

  ngOnInit() {
    this.mensaje = this.proveedoresService.getVersion();
    this.proveedores = this.proveedoresService.getProveedores();
  }

  eliminarProveedor (email: string) {
    this.proveedoresService.deleteProveedor(email);
    this.proveedores = this.proveedoresService.getProveedores();

  }

  ngOnDestroy () {
    console.log( 'En ngOnDestroy de ProveedoresHomeComponent');
  }

}
