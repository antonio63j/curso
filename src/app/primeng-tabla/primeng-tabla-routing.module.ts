import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { PrimengTablaComponent } from './primeng-tabla.component';

const routes: Routes = [
  { path: '', component: PrimengTablaComponent},
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  // exports: [RouterModule]
  exports: []
})
export class PrimengTablaRoutingModule { }
