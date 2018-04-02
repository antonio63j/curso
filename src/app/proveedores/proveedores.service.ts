import { Injectable } from '@angular/core';
import { ProveedorModelo } from './proveedor-modelo';

@Injectable()
export class ProveedoresService {
  proveedores: ProveedorModelo[] = [];

  constructor() {
    this.addProveedor(
      new ProveedorModelo('Telefónica',
        'Mayor 2',
        'Madrid',
        'info@telefonica.com',
        '1123'));
    this.addProveedor(new ProveedorModelo(
        'Iberdrola',
        'Príncipe de Vergara, 200',
        'Bilbao',
        'info@iberdrola.com',
        '2222'));
  }

  getVersion() {
    return 'version 1.0.3';
  }

  getProveedores() {
    return this.proveedores;
  }

  addProveedor(proveedor: ProveedorModelo): void {
    this.proveedores.push(proveedor);
  }
}
