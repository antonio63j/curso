import { Component, OnInit, OnDestroy } from '@angular/core';
// Para control de formularios reactivos, debe importarse ReactiveFormsModule
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PresupuestosService } from '../presupuestos.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-addpres',
  templateUrl: './addpres.component.html',
  styleUrls: ['./addpres.component.css']
})

export class AddpresComponent implements OnInit, OnDestroy {

  presupuestoForm: FormGroup;
  presupuesto: any;
  base: any;
  tipo: any;
  iva: any = 0;
  total: any = 0;
  subscriptionOnChange; subscriptionOnSubmit: Subscription;

  constructor(private pf: FormBuilder,
    private presupuestoService: PresupuestosService) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor: ['', Validators.required],
      fecha: ['', Validators.required],
      concepto: ['', [Validators.required, Validators.minLength(12)]],
      base: ['', Validators.required],
      tipo: ['', Validators.required],
      // val2: [{value:'', disabled: val1Control.valid}]
      iva: this.iva,
      total: this.total
    });
    this.onChange();
  }

  onSubmit() {
    this.presupuesto = this.savePresupuesto();
    this.subscriptionOnSubmit = this.presupuestoService.postPresupuesto(this.presupuesto)
      .subscribe(newpres => { });
    this.presupuestoForm.reset();
  }

  savePresupuesto() {
    const savePresupuesto = {
      proveedor: this.presupuestoForm.get('proveedor').value,
      fecha: this.presupuestoForm.get('fecha').value,
      concepto: this.presupuestoForm.get('concepto').value,
      base: this.presupuestoForm.get('base').value,
      tipo: this.presupuestoForm.get('tipo').value,
      iva: this.presupuestoForm.get('iva').value,
      total: this.presupuestoForm.get('total').value
    };
    return savePresupuesto;
  }

  onChange(): void {
    this.subscriptionOnChange = this.presupuestoForm.valueChanges.subscribe(valor => {
      this.base = valor.base;
      this.tipo = valor.tipo;
      this.presupuestoForm.value.iva = this.base * this.tipo;
      this.presupuestoForm.value.total = this.base + (this.base * this.tipo);
    });
  }

  ngOnDestroy () {
     console.log('AddpresComponent.ngOnDestroy (), realizando unsubscribes');
     this.subscriptionOnChange.unsubscribe();
     if (this.subscriptionOnChange.subscriptionOnSubmint) {
      this.subscriptionOnSubmit.unsubscribe();
     }
  }

}
