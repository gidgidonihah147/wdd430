import { Component, Input } from '@angular/core';
import { Message } from '../../message.model';
import { ContactService } from '../../../contacts/contact.service';
import { Contact } from '../../../contacts/contact.model';

@Component({
  selector: 'app-message-item',
  templateUrl: './message-item.component.html',
  styleUrl: './message-item.component.css'
})
export class MessageItemComponent {
  @Input() messages: Message;
  messageSender: string;
  constructor(private contactService: ContactService) {}
  ngOnInit() {
     const contact: Contact = this.contactService.getContact(this.messages.sender);
     this.messageSender = contact.name;
  }

}