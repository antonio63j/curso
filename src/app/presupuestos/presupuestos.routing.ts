import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PresupuestosPrincipalComponent } from './presupuestos-principal/presupuestos-principal.component';
import { AddpresComponent } from './addpres/addpres.component';
import { EditpresComponent } from './editpres/editpres.component';


const routes: Routes = [
  { path: '', component: PresupuestosPrincipalComponent},
  { path: 'addpres', component: AddpresComponent },
  { path: 'editpres/:id', component: EditpresComponent},
  { path: '**', redirectTo: ''},

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [
    RouterModule
  ]
})
export class PresupuestosRoutingModule {
}
