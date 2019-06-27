import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DocFuentesModule } from '../doc-fuentes/doc-fuentes.module';
// Servicios
// import { ProveedoresService } from './proveedores.service';

// Componentes
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresHomeComponent } from './proveedores-home/proveedores-home.component';
import { ProveedoresAddComponent } from './proveedores-add/proveedores-add.component';
import { ProveedoresHeaderComponent } from './proveedores-header/proveedores-header.component';
import { FormsModule } from '@angular/forms';
import { ProveedoresEditComponent } from './proveedores-edit/proveedores-edit.component';
// import { HighlightModule } from 'ngx-highlightjs';

import { DocProveedoresHomeComponent } from './proveedores-home/doc-proveedores-home.component';
import { DocProveedoresAddComponent } from './proveedores-add/doc-proveedores-add.component';
import { DocProveedoresEditComponent } from './proveedores-edit/doc-proveedores-edit.component';

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ProveedoresRoutingModule,
    // HighlightModule.forRoot(),
    DocFuentesModule
  ],
  declarations: [
    ProveedoresHomeComponent,
    ProveedoresAddComponent,
    ProveedoresHeaderComponent,
    ProveedoresEditComponent,
    DocProveedoresHomeComponent,
    DocProveedoresAddComponent,
    DocProveedoresEditComponent
    // DocFuentesTestComponent
    ],
  providers: [
    // ProveedoresService
  ]
})
export class ProveedoresModule { }
