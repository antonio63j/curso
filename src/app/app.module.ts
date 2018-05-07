
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
import { DocFuentesModule } from './doc-fuentes/doc-fuentes.module';
import { HighlightModule } from 'ngx-highlightjs';
import { ViewchildModule } from './viewchild/viewchild.module';

// import { LbdModule } from './lbd/lbd.module';

// importacion mis directivas
import { RainbowDirectiveDirective } from './misdirectivas/rainbow-directive.directive';
import { ConfirmDirectiveDirective } from './misdirectivas/confirm-directive.directive';
import { TextSnippetDirective } from './misdirectivas/test-snippets.directive';
// importacion de servicios
import { ProveedoresService } from './proveedores/proveedores.service';

// importacion de componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { DocCopyrightComponent } from './copyright/doc-copyright.component';
import { FechaactualComponent } from './fechaactual/fechaactual.component';
import { ViewmodeloComponent } from './viewmodelo/viewmodelo.component';
import { ViewmodeloPadreComponent } from './viewmodelo/viewmodelo-padre.component';
import { DocViewmodeloPadreComponent } from './viewmodelo/doc-viewmodelo-padre.component';
import { InicioComponent } from './inicio/inicio.component';
import { PipeeuroPipe } from './mispipes/pipeeuro.pipe';
import { Pipeeuro2Pipe } from './mispipes/pipeeuro2.pipe';
import { EjpropertybindingComponent } from './ejpropertybinding/ejpropertybinding.component';
import { DocEjpropertybindingComponent } from './ejpropertybinding/doc-ejpropertybinding.component';
import { EjeventbindingComponent } from './ejeventbinding/ejeventbinding.component';
import { Ej2waybindingComponent } from './ej2waybinding/ej2waybinding.component';
import { DocEj2waybindingComponent} from './ej2waybinding/doc-ej2waybinding.component';
import { EjdirectivangifComponent } from './ejdirectivangif/ejdirectivangif.component';
import { DocEjDirectivangifComponent } from './ejdirectivangif/doc-ejdirectivangif.component';
import { EjdirectivangstyleComponent } from './ejdirectivangstyle/ejdirectivangstyle.component';
import { DocEjDirectivangstyleComponent } from './ejdirectivangstyle/doc-ejdirectivangstyle.component';
import { EjdirectivangclassComponent } from './ejdirectivangclass/ejdirectivangclass.component';
import { DocEjDirectivangclassComponent } from './ejdirectivangclass/doc-ejdirectivangclass.component';
import { EjdirectivangforComponent } from './ejdirectivangfor/ejdirectivangfor.component';
import { DirectivamenuDirective } from './directivamenu.directive';
import { TestdirectivamenuComponent } from './testdirectivamenu/testdirectivamenu.component';
import { DocTestdirectivamenuComponent } from './testdirectivamenu/doc-testdirectivamenu.component';
import { UsodirectivainputhijoComponent } from './usodirectivainputhijo/usodirectivainputhijo.component';
import { UsodirectivainputpadreComponent } from './usodirectivainputpadre/usodirectivainputpadre.component';
import { UsoDirectivaRainbowComponent } from './uso-directiva-rainbow/uso-directiva-rainbow.component';
import { DocUsodirectivainputpadreComponent } from './usodirectivainputpadre/doc-usodirectivainputpadre.component';
import { DocUsoDirectivaRainbowComponent } from './uso-directiva-rainbow/doc-uso-directiva-rainbow.component';
import { UsoDirectivaConfirmComponent } from './uso-directiva-confirm/uso-directiva-confirm.component';
import { TextSnippetComponent } from './uso-directiva-test-snippets/uso-directiva-test-snippets.component';
import { DocUsoDirectivaConfirmComponent } from './uso-directiva-confirm/doc-uso-directiva-confirm.component';
import { DocTextSnippetComponent } from './uso-directiva-test-snippets/doc-uso-directiva-test-snippets.component';
import { TestDestroy } from './testdestroy/testdestroy.component';
import { AppDestroy } from './testdestroy/testdestroy.component';
import { PrimengTablaComponent } from './primeng-tabla/primeng-tabla.component';

@NgModule({
  declarations: [
    AppComponent,
    CopyrightComponent,
    DocCopyrightComponent,
    FechaactualComponent,
    ViewmodeloComponent,
    ViewmodeloPadreComponent,
    DocViewmodeloPadreComponent,
    PipeeuroPipe,
    Pipeeuro2Pipe,
    InicioComponent,
    EjpropertybindingComponent,
    EjeventbindingComponent,
    DocEjpropertybindingComponent,
    Ej2waybindingComponent,
    DocEj2waybindingComponent,
    EjdirectivangifComponent,
    EjdirectivangstyleComponent,
    EjdirectivangclassComponent,
    EjdirectivangforComponent,
    DirectivamenuDirective,
    TestdirectivamenuComponent,
    UsodirectivainputpadreComponent,
    UsodirectivainputhijoComponent,
    RainbowDirectiveDirective,
    UsoDirectivaRainbowComponent,
    ConfirmDirectiveDirective,
    UsoDirectivaConfirmComponent,
    DocUsoDirectivaConfirmComponent,
    TextSnippetDirective,
    TextSnippetComponent,
    TestDestroy,
    AppDestroy,
    DocEjDirectivangifComponent,
    DocEjDirectivangstyleComponent,
    DocEjDirectivangclassComponent,
    DocTestdirectivamenuComponent,
    DocUsoDirectivaRainbowComponent,
    DocUsodirectivainputpadreComponent,
    DocTextSnippetComponent,
    LoginComponent,
    RegistroComponent,
    PrimengTablaComponent

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
    DocFuentesModule,
    HighlightModule.forRoot(),
    ViewchildModule

    // LbdModule
  ],
  providers: [
    ProveedoresService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
