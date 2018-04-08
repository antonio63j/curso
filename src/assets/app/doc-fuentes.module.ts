import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocFuentesComponent } from './doc-fuentes.component';

import { HighlightModule } from 'ngx-highlightjs';

import { DocEj2waybindingComponent} from '../ej2waybinding/doc-ej2waybinding.component';

@NgModule({
  imports: [
    CommonModule,
    HighlightModule,

  ],

  declarations: [
    DocFuentesComponent,
    
  ],

  exports: [
    CommonModule,
    HighlightModule,
    DocFuentesComponent

  ]
})
export class DocFuentesModule { }
