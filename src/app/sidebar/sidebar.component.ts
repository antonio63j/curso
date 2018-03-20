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
    { path: 'fechas', title: 'Fechas demo', icon: 'pe-7s-note2', class: '' },
    { path: 'viewmodelo', title: 'viewmodelo demo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjpropertybindingComponent', title: 'Property-Binding demo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'Ej2waybindingComponent', title: 'TwoWay-Binding demo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangifComponent', title: 'Directiva ngIf demo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangstyleComponent', title: 'Directiva ngStyle demo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangclassComponent', title: 'Directiva ngClass demo', icon: 'pe-7s-news-paper', class: '' },
    { path: 'EjdirectivangforComponent', title: 'Directiva ngFor demo', icon: 'pe-7s-news-paper', class: '' },

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

