import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MensajeDelObsevable } from '../../../modelo/mensajeDelObservable.modelo';
import { MessageService } from '../../services/message.service';

@Component({
  selector: 'app-receptor2',
  templateUrl: './receptor2.component.html',
  styleUrls: ['./receptor2.component.css']
})
export class Receptor2Component implements OnInit, OnDestroy {

  // message: any;
  message: MensajeDelObsevable;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
      // subscribe to home component messages
      this.subscription = this.messageService.getMessage().subscribe(message => { this.message = message; });
  }

  ngOnDestroy() {
      // unsubscribe to ensure no memory leaks
      this.subscription.unsubscribe();
  }


  ngOnInit() {
  }

}
