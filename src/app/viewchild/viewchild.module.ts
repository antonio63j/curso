import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocFuentesModule } from '../doc-fuentes/doc-fuentes.module';

import { ViewchildRoutingModule } from './viewchild-routing.module';

import { ViewchildDemo3Component } from './viewchild-demo3/viewchild-demo3.component';
import { ViewchildDemo2Component } from './viewchild-demo2/viewchild-demo2.component';
import { ViewchildDemo2ChildDirective } from './viewchild-demo2/viewchild-demo2child.directive';
import { ViewchildDemo1Component } from './viewchild-demo1/viewchild-demo1.component';
import { ViewchildDemo1ChildComponent } from './viewchild-demo1/viewchild-demo1child.component';
import { DocViewchildDemo1Component } from './viewchild-demo1/doc-viewchild-demo1.component';
import { DocViewchildDemo2Component } from './viewchild-demo2/doc-viewchild-demo2.component';

import { ViewchildHomeComponent } from './viewchild-home/viewchild-home.component';

@NgModule({
  imports: [
    CommonModule,
    ViewchildRoutingModule,
    DocFuentesModule
  ],
  declarations: [
    ViewchildDemo3Component,
    ViewchildDemo2Component,
    ViewchildDemo2ChildDirective,
    ViewchildDemo1Component,
    ViewchildHomeComponent,
    ViewchildDemo1ChildComponent,
    DocViewchildDemo1Component,
    DocViewchildDemo2Component
  ]
})
export class ViewchildModule { }
