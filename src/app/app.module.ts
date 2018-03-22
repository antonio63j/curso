
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule} from '@angular/forms';

// importación de módulos
import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';
// import { LbdModule } from './lbd/lbd.module';

// importacion modulo de arranque
import { AppComponent } from './app.component';

// importacion de componentes demos
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';

import { CopyrightComponent } from './copyright/copyright.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { InicioComponent } from './inicio/inicio.component';
import { PipeeuroPipe } from './mispipes/pipeeuro.pipe';
import { Pipeeuro2Pipe } from './mispipes/pipeeuro2.pipe';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { DirectivamenuDirective } from './directivamenu.directive';
import { TestdirectivamenuComponent } from './testdirectivamenu/testdirectivamenu.component';
import { UsodirectivainputhijoComponent } from './usodirectivainputhijo/usodirectivainputhijo.component';
import { UsodirectivainputpadreComponent } from './usodirectivainputpadre/usodirectivainputpadre.component';
import { HighlightModule } from 'ngx-highlightjs';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    FechaactualComponent,
    ViewmodeloComponent,
    PipeeuroPipe,
    Pipeeuro2Pipe,
    InicioComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    Ej2waybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    DirectivamenuDirective,
    TestdirectivamenuComponent,
    UsodirectivainputpadreComponent,
    UsodirectivainputhijoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HighlightModule.forRoot()
    // LbdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
