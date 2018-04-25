import { Component, OnInit } from '@angular/core';

// declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Todos los ejemplos', icon: 'pe-7s-graph', class: '' },
    { path: 'copyright', title: 'Copyright demo', icon: 'pe-7s-user', class: '' },
    { path: 'fechas', title: 'Fechas', icon: 'pe-7s-note2', class: '' },
    { path: 'viewmodelo', title: 'viewmodelo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjpropertybindingComponent', title: 'Property-Binding', icon: 'pe-7s-news-paper', class: '' },
    { path: 'Ej2waybindingComponent', title: 'TwoWay-Binding', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangifComponent', title: 'Directiva ngIf', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangstyleComponent', title: 'Directiva ngStyle', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangclassComponent', title: 'Directiva ngClass', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangforComponent', title: 'Directiva ngFor', icon: 'pe-7s-news-paper', class: '' },
    { path: 'Usodirectivainput', title: 'Directiva @Input', icon: 'pe-7s-news-paper', class: '' },
    { path: 'TestdirectivamenuComponent', title: 'Construcción directiva', icon: 'pe-7s-news-paper', class: '' },
    { path: 'Testdirectivarainbow', title: 'Construcción directiva', icon: 'pe-7s-news-paper', class: '' },
    { path: 'UsoDirectivaConfirmComponent', title: 'Construcción direcitva', icon: 'pe-7s-news-paper', class: ''},
    { path: 'TextSnippetComponent', title: 'Construcción directiva con @Output', icon: 'pe-7s-news-paper', class: '' },
    // { path: 'TestServicioProveedores', title: 'Servicio proveedores', icon: 'pe-7s-news-paper', class: '' },
    { path: 'AppDestroy', title: 'Destrucción de servicio local', icon: 'pe-7s-news-paper', class: '' },
    { path: 'presupuestosprincipal', title: 'Froms Reactivos', icon: 'pe-7s-news-paper', class: '' },
    { path: 'proveedoreshome', title: 'Forms Template-driven', icon: 'pe-7s-news-paper', class: '' },
    { path: 'comunicacion-observable', title: 'Comunicacion con observables', icon: 'pe-7s-news-paper', class: '' },
    { path: 'form-login', title: 'Formulario login', icon: 'pe-7s-news-paper', class: '' },
    { path: 'viewchild', title: '@ViewChild demos', icon: 'pe-7s-news-paper', class: '' },

  ];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    return false;
  }
}

