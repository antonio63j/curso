import { Injectable, OnDestroy } from '@angular/core';
import { ProveedorModelo } from './proveedor-modelo';

@Injectable()
export class ProveedoresService implements OnDestroy {
  proveedores: ProveedorModelo[] = [];
  proveedoresList: ProveedorModelo[] = [];

  constructor() {
    this.addProveedor(
      new ProveedorModelo('Telefónica',
        'Mayor 2',
        'MA',
        'info@telefonica.com',
        '1123'));
    this.addProveedor(new ProveedorModelo(
      'Iberdrola',
      'Príncipe de Vergara, 200',
      'BI',
      'info@iberdrola.com',
      '2222'));
  }

  getVersion() {
    return 'version 1.0.3';
  }

  getProveedores() {
    return this.proveedores;
  }

  getProveedor(email: string): ProveedorModelo {
    console.log(`En ProveedoresServicio.getProveedor buscando entrada con mail ${email}`);
    this.proveedoresList = this.proveedores.filter(
      provee => provee.email === email);
    if (this.proveedoresList.length > 0) {
      return this.proveedoresList[0];
    } else {
      return null;
    }
  }

  addProveedor(proveedor: ProveedorModelo): void {
    this.proveedores.push(proveedor);
  }

  deleteProveedor (email: string ): void {
    let proveedoresAux: ProveedorModelo[];
    proveedoresAux = this.proveedores.filter(
      provee => provee.email !== email);
    this.proveedores = proveedoresAux;
  }

  buscaProveedorByEmail(provee) {
    return (provee.email === this);
  }

  updateProveedor(proveedor: ProveedorModelo): void {
     let proveedorOld: ProveedorModelo;
     proveedorOld = this.proveedores.find(this.buscaProveedorByEmail, proveedor.email);
     const index = this.proveedores.indexOf(proveedorOld);
     this.proveedores[index] = proveedor;
  }

  ngOnDestroy () {
    console.log ('En ngOnDestroy');
  }
}
