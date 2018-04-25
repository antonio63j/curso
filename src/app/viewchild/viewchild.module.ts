import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewchildRoutingModule } from './viewchild-routing.module';

import { ViewchildDemo3Component } from './viewchild-demo3/viewchild-demo3.component';
import { ViewchildDemo2Component } from './viewchild-demo2/viewchild-demo2.component';
import { ViewchildDemo1Component } from './viewchild-demo1/viewchild-demo1.component';
import { ViewchildHomeComponent } from './viewchild-home/viewchild-home.component';

@NgModule({
  imports: [
    CommonModule,
    ViewchildRoutingModule
  ],
  declarations: [ViewchildDemo3Component, ViewchildDemo2Component, ViewchildDemo1Component, ViewchildHomeComponent]
})
export class ViewchildModule { }
