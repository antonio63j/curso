import { Component, OnDestroy } from '@angular/core';
import { MensajeDelObsevable } from '../../modelo/mensajeDelObservable.modelo';
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

  nmessage: number = 0;
  objMensaje: MensajeDelObsevable;

  sendMessage(): void {
    // send message to subscribers via observable subject
    this.nmessage = this.nmessage + 1;
    this.objMensaje = new MensajeDelObsevable (this.nmessage, 'mensaje manual');
    this.finalizarEnvio (this.objMensaje);
  }

    finalizarEnvio(mensaje: MensajeDelObsevable){
         this.messageService.sendMessage(mensaje);
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
    // this.messageService.sendMessage ('Mensaje enviado con messageService:' + t);
    this.nmessage = this.nmessage + 1;
    this.objMensaje = new MensajeDelObsevable (this.nmessage, 'mensaje automático ' + t);
    this.finalizarEnvio (this.objMensaje);
  }

  ngOnDestroy() {
    console.log('En EmisorComponent.ngOnDestroy()');
  }

}
