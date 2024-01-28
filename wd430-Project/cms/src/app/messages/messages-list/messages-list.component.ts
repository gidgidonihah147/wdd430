import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css'
})
export class MessagesListComponent {
  messages: Message[] = [
    new Message (0,'TemplateSubject','This is a sample message text','Me'),
    new Message (1,'TemplateSubjectTwo','This is the second sample message text','Me')
  ];

  onMessageAdded(message:Message) {
   this.messages.push(message);
  }
}
