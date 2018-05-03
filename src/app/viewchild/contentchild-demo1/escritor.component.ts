import { Component, ContentChild } from '@angular/core';
import { BookDirective } from './book.directive';

@Component({
  selector: 'escritor',
  template: `
        Name: {{writerName}}
		<br/>Latest Book: {{book?.bookId}} - {{book?.bookName}} 
  `
})
export class EscritorComponent {
	@ContentChild(BookDirective) book: BookDirective;
	writerName = 'Mahesh';
}