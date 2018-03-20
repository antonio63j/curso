import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeeuro'
})
export class PipeeuroPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const transformado = value + " Euros";
    return transformado;
  }

}
