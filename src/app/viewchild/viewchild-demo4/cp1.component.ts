import { Component, ViewChild, ViewChildren, AfterViewInit, TemplateRef, ViewContainerRef, QueryList, ElementRef } from '@angular/core';
import { MessageDirective } from './message.directive';
import { WriterComponent } from './writer.component';

@Component({
    selector: 'app-cp1',
    templateUrl: './cp1.component.html'
})
export class Cp1Component implements AfterViewInit {
	ocultarFuentes = true;
	showAllWriter = false;

	// QueryList + @ViewChildren + Directive
	@ViewChildren(MessageDirective)
	private msgList: QueryList<MessageDirective>;

	@ViewChild('msgTemp')
	private msgTempRef: TemplateRef<any>;

	// QueryList + @ViewChildren + Component
	@ViewChildren('bkWriter')
	allWriters: QueryList<WriterComponent>;

	// QueryList + @ViewChildren + ElementRef
	@ViewChildren('pname')
	allPersons: QueryList<ElementRef>;

	ngAfterViewInit() {
		// Using QueryList.changes --- 
		console.log('**** cambio en allWriters ****:');
		this.allWriters.changes.subscribe(list => {
			list.forEach(writer => console.log(writer.writerName + ' - ' + writer.bookName));
		});
		
		// using QueryList.forEach
		this.msgList.forEach(messDirective =>
			messDirective.viewContainerRef.createEmbeddedView(this.msgTempRef));
  
		console.log('**** items de allWriters ****:');
		this.allWriters.forEach(writer => console.log(JSON.stringify(writer)));

		const javaWriter = this.allWriters.find(writer => writer.bookName === 'Java Tutorials');
		console.log('using QueryList.find, **** Nombre del autor del libro "Java Tutorials" ****:' + javaWriter.writerName);

		// using QueryList.map
		console.log('**** Nombre de los escritores ****:');
		let wnames = this.allWriters.map(writer => writer.writerName);
		for (let name of wnames) {
			console.log(name);
		}

		// using QueryList.filter ---');
		const writers = this.allWriters.filter(writer => writer.writerName === 'Krishna');
		for (const w of writers) {
			console.log('using QueryList.filter, **** Nombre del libro del autor "Krishma" ****:' + w.bookName);
		}

		console.log('**** Primera y ultima persona de la lista allPersons ****');
		const firstEl = this.allPersons.first;
		const lastEl = this.allPersons.last;
		console.log('primer elemento =' + firstEl.nativeElement.innerHTML + '\n' +
	             	'ultimo elemento =' + lastEl.nativeElement.innerHTML);
	}

	onShowAllWriters() {
		this.showAllWriter = (this.showAllWriter === true) ? false : true;
	}

	mostrarOcultarFuentes() {
		this.ocultarFuentes = !this.ocultarFuentes;
	}
}
