import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';


import { InicioComponent } from './inicio/inicio.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';

const routes: Routes = [
  {path: '', component: ViewmodeloComponent},
  {path: 'home', component: InicioComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'fechas', component: FechaactualComponent},
  {path: 'viewmodelo', component: ViewmodeloComponent},
  {path: 'EjpropertybindingComponent', component: EjpropertybindingComponent},
  {path: 'EjeventbindingComponent' , component: EjeventbindingComponent},
  {path: '**', component: InicioComponent},

  // {path: 'testproveedores',component: TestproveedoresComponent},
  // {path: 'directivainput',component: UsodirectivainputpadreComponent},
  // {path: 'addprovee', component: AddproveeComponent},
  // {path: 'addpres', component: AddpresComponent},
  // {path: 'listapresupuestos', component: ListapresComponent},
  // {path: 'editpres/:id', component: EditpresComponent},
  // {path: 'registro', component: RegistroComponent},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
