import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Message } from '../message.model';
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent implements OnInit {
  messages: Message[] = [];

  constructor(private MessagesService: MessagesService){

  }
  ngOnInit(): void {
      this.messages = this.MessagesService.getMessages();
      this.MessagesService.messageChanged
      .subscribe(
        (messages: Message[]) => {
          this.messages = messages;
        }
      )
  }

  // onMessageAdded(message:Message) {
  //  this.messages.push(message);
  // }
}
