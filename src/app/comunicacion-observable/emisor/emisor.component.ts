import { Component, OnDestroy } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-emisor-root',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})

export class EmisorComponent implements OnDestroy {
  title = 'Comunicacion entre componentes por medio de observables';
  constructor(private messageService: MessageService) {}

  sendMessage(): void {
      // send message to subscribers via observable subject
      this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
      // clear message
      this.messageService.clearMessage();
  }

  ngOnDestroy() {
    console.log ('En EmisorComponent.ngOnDestroy()');
  }

}
