import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from '../presupuestos.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-editpres',
  templateUrl: './editpres.component.html',
  styleUrls: ['./editpres.component.css'],
  providers: [PresupuestosService]
})
export class EditpresComponent implements OnInit, OnDestroy {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  id: string;
  subscriptionChanges: Subscription; subscriptionParams: Subscription; subscriptionGetPresupuesto: Subscription;
  presupuestoObs: Observable<any>;

  constructor(private pf: FormBuilder,
    private presupuestoService: PresupuestosService,
    private router: Router,
    private activatedRouter: ActivatedRoute) {
    this.subscriptionParams = this.activatedRouter.params
      .subscribe(parametros => {
        this.id = parametros['id'];
        console.log ('parametros = ' , parametros);
      });
  }

  tratarParams (id: string) {
/*     this.subscriptionGetPresupuesto = this.presupuestoService.getPresupuesto(id)
    .subscribe(unPresupuesto => this.presupuesto = unPresupuesto); */
     this.presupuestoObs = this.presupuestoService.getPresupuesto(id);
  }

  ngOnInit() {
    this.tratarParams (this.id);
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(12)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      iva: this.iva,
      total: this.total
    });
    this.onChanges();
  }

  onChanges(): void {
    this.subscriptionChanges = this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.presupuestoService.putPresupuesto(this.presupuesto, this.id)
      .subscribe(newpre => {
        this.router.navigate(['presupuestosprincipal']);
      });

  }

  savePresupuesto() {
    const saveElPresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value

    };
    return saveElPresupuesto;
  }

  ngOnDestroy() {
    console.log('en ngOnDestroy(), realizando unsubscribes');
/*     this.subscriptionParams.unsubscribe();
    this.subscriptionGetPresupuesto.unsubscribe();
    if (this.subscriptionChanges) {
      this.subscriptionChanges.unsubscribe();
    } */
  }

}
