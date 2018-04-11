import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PresupuestosRoutingModule } from './comunicacion-observable.routing';

import { DocFuentesModule } from '../doc-fuentes/doc-fuentes.module';

import { EmisorComponent } from './emisor/emisor.component';
import { Receptor1Component } from './receptores/receptor1/receptor1.component';
import { Receptor2Component } from './receptores/receptor2/receptor2.component';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    EmisorComponent,
    Receptor1Component,
    Receptor2Component
  ],
  imports: [
    CommonModule,
    DocFuentesModule,
    PresupuestosRoutingModule
  ],
  providers: [MessageService
  ],
  bootstrap: [EmisorComponent]
})
export class ComunicacionObservableModule { }
