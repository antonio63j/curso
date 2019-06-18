import { Injectable, Component, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Service implements OnDestroy {

  constructor () {
    console.log ('invocado constructor de objeto Service');
  }
  ngOnDestroy() {
    console.log('invocado ngOnDestroy de Service');
  }
}

@Component({
  selector: 'testdestroy',
  template: `{{texto}} - Ver en 10 seg. en consola como se invocan los onDestroy del Servicio y el ngOnDestroy del componente <br>`,
  providers: [Service] // Si se declara en app.module.ts no destruye Service
})
export class TestDestroy {
  constructor(service: Service) {
    console.log(' invocado constructor del componente TestDestroy');
  }

  texto = 'Estoy vivo';
  ngOnDestroy() {
    console.log('invocado ngOnDestroy del componente TestDestroy');
  }
}

@Component({
  selector: 'app-destroy',
  templateUrl: `./testdestroy.component.html`,
})
export class AppDestroy {

  istestdestroy = true;
  textoelemento = 'Estoy vivo';

  // constructor(private http: Http) {
    constructor() {
    console.log('llamada al constructor del componente AppDestroy');
    setTimeout(() => { this.istestdestroy = false; }, 10000);

  }
  ngOnDestroy() {
    console.log('AppDestroy destroy');
  }
}