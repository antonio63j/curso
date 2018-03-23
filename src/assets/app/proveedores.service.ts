import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  constructor() { }

  getVersion() {
    return '1.0.1';
  }

  proveedores: any = [ 
    {nombre: 'Telefónica',
     telefono: 911111111,
     email: 'info@telefonica.com'
    }, 
    {nombre: 'Iberdrola',
     telefono: 922222222,
     email: 'info@iberdrola.com'
    } 
  ];

 getProviders() {
    return this.proveedores;
  }

}
