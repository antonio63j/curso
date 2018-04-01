import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
//import { Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PresupuestosService {

  presURL = 'https://comprasapp-fdc30.firebaseio.com/presupuestos.json';
  presupuestoURL = 'https://comprasapp-fdc30.firebaseio.com/presupuestos';

  constructor(private http: Http) { }

  postPresupuesto( presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post( this.presURL, newpres, {headers})
     .map( res => {
       console.log(res.json());
       return res.json(); })
    }

  //getPresupuestos (): Observable<Response> {
  getPresupuestos () {
   return this.http.get(this.presURL)
    .map( resultado => resultado.json());
  }

  getPresupuesto(idPres: string) {
    const url = `${ this.presupuestoURL }/${ idPres }.json`;
    return this.http.get( url)
     .map( res => res.json());
  }

  putPresupuesto( presupuesto: any, id$: string) {
    const newpre = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    const url = `${ this.presupuestoURL }/${ id$ }.json`;

    return this.http.put( url, newpre, {headers})
      .map( res => {
        console.log(res.json());
        return res.json();
        });
  }

  delPresupuesto ( id$: string ) {
  const url = `${ this.presupuestoURL }/${ id$ }.json`;
  return this.http.delete( url )
    .map( res => res.json());
  }

}
