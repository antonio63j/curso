import { Component, OnInit } from '@angular/core';
import {PresupuestosService} from '../presupuestos.service';

@Component({
  selector: 'app-presupuestos-principal',
  templateUrl: './presupuestos-principal.component.html',
  styleUrls: ['./presupuestos-principal.component.scss']
})
export class PresupuestosPrincipalComponent implements OnInit {

  listaDePresupuestos: any[] = [];

  constructor(private presupuestosService: PresupuestosService) {
    this.presupuestosService.getPresupuestos()
        .subscribe(lpresupuestos => {
           for ( const id$ in lpresupuestos) {
             const p = lpresupuestos[id$];
             p.id$ = id$;
             this.listaDePresupuestos.push(lpresupuestos[id$]);
          }
        });
  }
  ngOnInit() {
  }

  eliminarPresupuesto(id$) {

  this.presupuestosService.delPresupuesto(id$)
    .subscribe( res => {
      this.listaDePresupuestos = [];
      this.presupuestosService.getPresupuestos()
      .subscribe(presupuestos => {
         for ( const id$ in presupuestos) {
           const p = presupuestos[id$];
           p.id$ = id$;
           this.listaDePresupuestos.push(presupuestos[id$]);
        }
      })
    });
  }

}
