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
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { TestdirectivamenuComponent } from './testdirectivamenu/testdirectivamenu.component';

const routes: Routes = [
  {path: '', component: ViewmodeloComponent},
  {path: 'home', component: InicioComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'fechas', component: FechaactualComponent},
  {path: 'viewmodelo', component: ViewmodeloComponent},
  {path: 'EjpropertybindingComponent', component: EjpropertybindingComponent},
  {path: 'EjeventbindingComponent' , component: EjeventbindingComponent},
  {path: 'Ej2waybindingComponent' , component: Ej2waybindingComponent},
  {path: 'EjdirectivangifComponent' , component: EjdirectivangifComponent},
  {path: 'EjdirectivangstyleComponent' , component: EjdirectivangstyleComponent},
  {path: 'EjdirectivangclassComponent' , component: EjdirectivangclassComponent},
  {path: 'EjdirectivangforComponent' , component: EjdirectivangforComponent},
  {path: 'TestdirectivamenuComponent' , component: TestdirectivamenuComponent},
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
