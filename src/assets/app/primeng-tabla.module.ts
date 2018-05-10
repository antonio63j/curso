// Necesario quitar estos dos imports
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';


import { PrimengTablaRoutingModule } from './primeng-tabla-routing.module';
import { PrimengTablaComponent } from './primeng-tabla.component';

@NgModule({
    declarations: [
        PrimengTablaComponent
    ],
    imports: [
  //    BrowserAnimationsModule,
  //    NoopAnimationsModule,
        PrimengTablaRoutingModule,
        CommonModule,
        RouterModule,
        FormsModule,
        TableModule,
        HttpClientModule,
        InputTextModule,
        DialogModule,
        ButtonModule
    ],
    providers: []

})
export class PrimengTablaModule { }