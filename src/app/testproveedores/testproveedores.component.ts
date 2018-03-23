import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { ProveedoresService } from '../servicios/proveedores.service';

@Component({
  selector: 'app-testproveedores',
  templateUrl: './testproveedores.component.html',
  styleUrls: ['./testproveedores.component.css'],
  providers: [ProveedoresService]
})

export class TestproveedoresComponent implements OnInit {
  codehtml; codets; codesv: string;

  mensaje: string;
  proveedores: any;

  constructor(private proveedoresService: ProveedoresService, private http: Http) {
    this.http.get('assets/app/testproveedores.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
    this.http.get('assets/app/proveedores.service.ts')
      .subscribe(data => { this.codesv = data.text(); });
    this.http.get('assets/app/testproveedores.component.ts')
      .subscribe(data => { this.codets = data.text(); });
  }

  ngOnInit() {
    this.mensaje = this.proveedoresService.getVersion();
    this.proveedores = this.proveedoresService.getProviders();
  }

  ngOnDestroy() {
    console.log(' Se invoca TestproveedoresComponent.ngOnDestroy()');
  }
}
