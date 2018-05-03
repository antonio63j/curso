import { NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { DocFuentesModule } from '../doc-fuentes/doc-fuentes.module';

import { ViewchildHomeComponent } from './viewchild-home/viewchild-home.component';
import { ViewchildDemo1Component } from './viewchild-demo1/viewchild-demo1.component';
import { ViewchildDemo2Component } from './viewchild-demo2/viewchild-demo2.component';
import { ViewchildDemo3Component } from './viewchild-demo3/viewchild-demo3.component';
import { ViewchildDemo5Component } from './viewchild-demo5/viewchild-demo5.component';
import { Cp1Component } from './viewchild-demo4/cp1.component';
import { PersonComponent } from './contentchild-demo1/person.component';



const routes: Routes = [
  { path: '', component: ViewchildHomeComponent},
  { path: 'viewchild-demo1', component: ViewchildDemo1Component },
  { path: 'viewchild-demo2', component: ViewchildDemo2Component },
  { path: 'viewchild-demo3', component: ViewchildDemo3Component },
  { path: 'viewchild-demo4', component: Cp1Component },
  { path: 'viewchild-demo5', component: ViewchildDemo5Component },
  { path: 'contentchild-demo1', component: PersonComponent },
  { path: '**', redirectTo: ''},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DocFuentesModule
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  exports: [RouterModule]
})

export class ViewchildRoutingModule { }
