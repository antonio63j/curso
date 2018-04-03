import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ProveedoresHomeComponent } from './proveedores-home/proveedores-home.component';
import { ProveedoresAddComponent } from './proveedores-add/proveedores-add.component';
import { ProveedoresEditComponent } from './proveedores-edit/proveedores-edit.component';

const routes: Routes = [
  { path: '', component: ProveedoresHomeComponent},
  { path: 'addprovee', component: ProveedoresAddComponent },
  { path: 'editprovee/:email', component: ProveedoresEditComponent },
  // { path: 'editpres/:id', component: EditpresComponent},
  { path: '**', redirectTo: 'addprovee'},

];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [RouterModule]
})
export class ProveedoresRoutingModule { }
