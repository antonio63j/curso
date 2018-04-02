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

@NgModule({
  imports: [
    RouterModule,
    FormsModule,
    CommonModule,
    ProveedoresRoutingModule
  ],
  declarations: [
    ProveedoresHomeComponent,
    ProveedoresAddComponent,
    ProveedoresHeaderComponent],
  providers: [
    // ProveedoresService
  ]
})
export class ProveedoresModule { }
