import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../../contact.model';
import { ContactService } from '../../contact.service';

@Component({
  selector: 'app-contact-item',
  templateUrl: './contact-item.component.html',
  styleUrl: './contact-item.component.css',
})
export class ContactItemComponent {
  @Input() contacts: Contact;
  @Output() contactSelected = new EventEmitter<void>();

  constructor( private ContactService: ContactService){

  }
  onSelected(){
    this.ContactService.contactSelected.emit(this.contacts);
  }
}
