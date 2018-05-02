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
import { Cp1Component } from './viewchild-demo4/cp1.component';
import { WriterComponent} from './viewchild-demo4/writer.component';
import { MessageDirective } from './viewchild-demo4/message.directive';
import { DocViewchildDemo4Component } from './viewchild-demo4/doc-viewchild-demo4.component';
import { ViewchildDemo5Component } from './viewchild-demo5/viewchild-demo5.component';


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
    DocViewchildDemo2Component,
    Cp1Component,
    WriterComponent,
    MessageDirective,
    DocViewchildDemo4Component,
    ViewchildDemo5Component
  ]
})
export class ViewchildModule { }
