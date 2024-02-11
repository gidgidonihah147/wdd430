import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  @Output() contactSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [];

  constructor(private ContactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.ContactService.getContacts();
  }


}
