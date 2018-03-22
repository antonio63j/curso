import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeeuro2'
})
export class Pipeeuro2Pipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const transformado = value + ' €';
    return transformado;
  }

}
