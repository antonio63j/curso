import { Pipe, PipeTransform } from '@angular/core';
import { PROVINCIAS } from '../mock-data/provincias-mock';

@Pipe({
    name: 'showcapital'
})
export class ShowcapitalPipe implements PipeTransform {

    provincias: any[] = PROVINCIAS;
    provinciasList: any[];

    transform(value: any, args?: any): any {
        this.provinciasList = this.provincias.filter(
            provincia => provincia.codigo == value);
        if (this.provinciasList.length > 0) {
            return this.provinciasList[0].descripcion;
        } else {
            return null;
        }
    }

}