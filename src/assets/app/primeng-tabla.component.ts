import { Component, OnInit } from '@angular/core';
import { Car } from './domain/car';
import { CarService } from './services/carservice';
import { PROVINCIAS } from '../mock-data/provincias-mock';

@Component({
    selector: 'app-primeng-tabla',
    templateUrl: './primeng-tabla.component.html',
    providers: [CarService]
})
export class PrimengTablaComponent implements OnInit {

    es: any;
    provincias: {}[] = PROVINCIAS;

    displayDialog: boolean;

    car: Car = new PrimeCar();

    selectedCar: Car;

    newCar: boolean;

    cars: Car[];

    cols: any[];

    constructor(private carService: CarService) { }

    ngOnInit() {
        this.es = {
            firstDayOfWeek: 0,
            dayNames: ["Lunes", "Martes", "Miercoles", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Lun", "Mar", "Mie", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["L", "M", "X", "J", "V", "S", "D"],
            monthNames: ["Enero", "Febrero", "Marzo", "Abril", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
            today: 'Hoy',
            clear: 'Clear'
        };

        this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'saleDate', header: 'Sale date' },
            { field: 'provincia', header: 'Provincia' }
        ];
    }

    showDialogToAdd() {
        this.newCar = true;
        this.car = new PrimeCar();
        this.displayDialog = true;
    }

    save() {
        const cars = [...this.cars];
        if (this.newCar) {
            cars.push(this.car);
        } else {
            cars[this.findSelectedCarIndex()] = this.car;
        }
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    }

    delete() {
        const index = this.findSelectedCarIndex();
        this.cars = this.cars.filter((val, i) => i != index);
        this.car = null;
        this.displayDialog = false;
    }

    onRowSelect(event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    }

    cloneCar(c: Car): Car {
        const car = new PrimeCar();
        for (const prop in c) {
            car[prop] = c[prop];
        }
        return car;
    }

    findSelectedCarIndex(): number {
        return this.cars.indexOf(this.selectedCar);
    }
}

export class PrimeCar implements Car {

    constructor(public vin?, public year?, public brand?, public color?, public saleDate?, public provincia?) { }
}
