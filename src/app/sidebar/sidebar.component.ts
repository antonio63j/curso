import { Component, OnInit } from '@angular/core';

// declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'home', title: 'Dashboard', icon: 'pe-7s-graph', class: '' },
    { path: 'copyright', title: 'Copyright demo', icon: 'pe-7s-user', class: '' },
    { path: 'fechas', title: 'Fechas demo', icon: 'pe-7s-note2', class: '' },
    { path: 'viewmodelo', title: 'viewmodelo demo', icon: 'pe-7s-news-paper', class: '' }

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
    return false;
  };
}
