import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { PresupuestosRoutingModule } from './presupuestos.routing';
import { PresupuestosPrincipalComponent } from './presupuestos-principal/presupuestos-principal.component';
import { PresupuestosHeaderComponent } from './presupuestos-header/presupuestos-header.component';
import { PresupuestosService } from './presupuestos.service';
import { AddpresComponent } from './addpres/addpres.component';
import { EditpresComponent } from './editpres/editpres.component';
import { DocPresupuestosComponent } from './doc-presupuestos.component';
import { DocFuentesModule } from '../doc-fuentes/doc-fuentes.module';


@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    PresupuestosRoutingModule,
    DocFuentesModule

  ],
  declarations: [PresupuestosPrincipalComponent,
    PresupuestosHeaderComponent,
    AddpresComponent,
    EditpresComponent,
    DocPresupuestosComponent,

  ],
  providers: [
    //PresupuestosService
  ]
})
export class PresupuestosModule { }
