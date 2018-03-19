
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
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    FechaactualComponent,
    ViewmodeloComponent,
    InicioComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent
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
    ReactiveFormsModule
    // LbdModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
