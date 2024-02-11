import { Component, OnInit } from '@angular/core';
import { Message } from './message.model';
import { MessagesService } from './messages.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css',
  providers: [MessagesService]
})
export class MessagesComponent implements OnInit{
  selectedMessage: Message
  constructor(private MessageService: MessagesService){

  }
  ngOnInit(): void {
      // this.MessageService.messagesChanged
      // .subscribe(
      //   (message: Message) => {
      //     this.selectedMessage = message;
      //   }
      // )
  }
}
