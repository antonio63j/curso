import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { InicioComponent } from './inicio/inicio.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { ViewmodeloPadreComponent } from './viewmodelo/viewmodelo-padre.component';

import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { TestdirectivamenuComponent } from './testdirectivamenu/testdirectivamenu.component';
import { UsodirectivainputpadreComponent } from './usodirectivainputpadre/usodirectivainputpadre.component';
import { UsoDirectivaRainbowComponent } from './uso-directiva-rainbow/uso-directiva-rainbow.component';
import { UsoDirectivaConfirmComponent } from './uso-directiva-confirm/uso-directiva-confirm.component';
import { TextSnippetComponent } from './uso-directiva-test-snippets/uso-directiva-test-snippets.component';
import { AppDestroy } from './testdestroy/testdestroy.component';

const routes: Routes = [
  {path: '', redirectTo: 'fechas', pathMatch: 'full'},
  {path: 'home', component: InicioComponent},
  {path: 'copyright', component: CopyrightComponent},
  {path: 'fechas', component: FechaactualComponent},
  {path: 'viewmodelo', component: ViewmodeloPadreComponent},
  {path: 'EjpropertybindingComponent', component: EjpropertybindingComponent},
  {path: 'EjeventbindingComponent' , component: EjeventbindingComponent},
  {path: 'Ej2waybindingComponent' , component: Ej2waybindingComponent},
  {path: 'EjdirectivangifComponent' , component: EjdirectivangifComponent},
  {path: 'EjdirectivangstyleComponent' , component: EjdirectivangstyleComponent},
  {path: 'EjdirectivangclassComponent' , component: EjdirectivangclassComponent},
  {path: 'EjdirectivangforComponent' , component: EjdirectivangforComponent},
  {path: 'TestdirectivamenuComponent' , component: TestdirectivamenuComponent},
  {path: 'Usodirectivainput' , component: UsodirectivainputpadreComponent},
  {path: 'Testdirectivarainbow', component: UsoDirectivaRainbowComponent},
  {path: 'UsoDirectivaConfirmComponent', component: UsoDirectivaConfirmComponent},
  {path: 'TextSnippetComponent', component: TextSnippetComponent},
  {path: 'AppDestroy', component: AppDestroy},
  {path: 'presupuestosprincipal', loadChildren: './presupuestos/presupuestos.module#PresupuestosModule'},
  {path: 'proveedoreshome', loadChildren: './proveedores/proveedores.module#ProveedoresModule'},
  {path: 'comunicacion-observable', loadChildren: './comunicacion-observable/comunicacion-observable.module#ComunicacionObservableModule'},
  {path: '**', redirectTo: 'fechas', pathMatch: 'full'},

];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    // RouterModule.forRoot(routes, {enableTracing: true, })
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule
  ],
})
export class AppRoutingModule { }
