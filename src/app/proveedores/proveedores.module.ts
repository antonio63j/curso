import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

// Servicios
// import { ProveedoresService } from './proveedores.service';

// Componentes
import { ProveedoresRoutingModule } from './proveedores-routing.module';
import { ProveedoresHomeComponent } from './proveedores-home/proveedores-home.component';
import { ProveedoresAddComponent } from './proveedores-add/proveedores-add.component';
import { ProveedoresHeaderComponent } from './proveedores-header/proveedores-header.component';
import { FormsModule } from '@angular/forms';
import { ProveedoresEditComponent } from './proveedores-edit/proveedores-edit.component';
import { DocFuentesTestComponent } from '../doc-fuentes/doc-fuentes-test/doc-fuentes-test.component';
import { DocFuentesComponent } from '../doc-fuentes/doc-fuentes.component';
import { HighlightModule } from 'ngx-highlightjs';
 
@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ProveedoresRoutingModule,
    HighlightModule.forRoot()
  ],
  declarations: [
    ProveedoresHomeComponent,
    ProveedoresAddComponent,
    ProveedoresHeaderComponent,
    ProveedoresEditComponent,
    DocFuentesComponent,
    DocFuentesTestComponent
    ],
  providers: [
    // ProveedoresService
  ]
})
export class ProveedoresModule { }
