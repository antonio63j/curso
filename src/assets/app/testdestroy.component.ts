import { Injectable, Component, OnDestroy } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class Service implements OnDestroy {
  ngOnDestroy() {
    console.log('Service destroy')
  }
}

@Component({
  selector: 'testdestroy',
  template: `{{texto}} - Ver en 10 seg. en consola como se invocan los onDestroy del Servicio y el ngOnDestroy del componente`,
  providers: [Service] // Si se declara en app.module.ts no destruye Service
})
export class TestDestroy {
  constructor(service: Service) { }
  texto = 'Estoy vivo';
  ngOnDestroy() {
    console.log('TestDestroy destroy');
  }
}

@Component({
  selector: 'app-destroy',
  templateUrl: `./testdestroy.component.html`,
})
export class AppDestroy {
  codehtml; codets: string;

  istestdestroy = true;
  textoelemento = 'Estoy vivo';

  constructor(private http: Http) {
    setTimeout(() => { this.istestdestroy = false; }, 10000);
    this.http.get('assets/app/testdestroy.component.ts')
      .subscribe(data => { this.codets = data.text(); });
    this.http.get('assets/app/testdestroy.component.html')
      .subscribe(data => { this.codehtml = data.text(); });
  }
  ngOnDestroy() {
    console.log('AppDestroy destroy');
  }
}