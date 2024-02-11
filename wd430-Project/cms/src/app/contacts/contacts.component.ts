import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
  providers: [ContactService]
})
export class ContactsComponent implements OnInit{
  selectedContact: Contact;

  constructor(private ContactService:ContactService){

  }
ngOnInit(): void {
    this.ContactService.contactSelected
    .subscribe(
      (contact: Contact) => {
        this.selectedContact = contact;
      }
    );
}
}
