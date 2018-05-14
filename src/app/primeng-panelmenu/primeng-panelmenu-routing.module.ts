import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';


import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: '', component: MenuComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: []
})
export class PrimengPanelmenuRoutingModule { }
