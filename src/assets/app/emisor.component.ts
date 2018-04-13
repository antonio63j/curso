import { Component, OnDestroy } from '@angular/core';

import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-emisor-root',
  templateUrl: './emisor.component.html',
  styleUrls: ['./emisor.component.css']
})

export class EmisorComponent implements OnDestroy {
  title = 'Comunicacion entre componentes con observables';
  sendingMessages = false;
  sendingMessagesIntervalId: any;

  constructor(private messageService: MessageService) {

  }

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

  startSendMessages() {
    this.sendingMessages = true;
    this.sendingMessagesIntervalId = setInterval(() => { this.tareaEnvio(); }, 2000);
  }

  stopSendMessages() {
    clearInterval(this.sendingMessagesIntervalId);
    this.sendingMessages = false;
  }

  tareaEnvio () {
    const d = new Date();
    const t = d.toLocaleTimeString();
    this.messageService.sendMessage ('Mensaje enviado con messageService:' + t);
  }

  ngOnDestroy() {
    console.log('En EmisorComponent.ngOnDestroy()');
  }

}
