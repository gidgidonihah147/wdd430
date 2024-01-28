import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
})
export class ContactListComponent implements OnInit {
  @Output() contactDetailSelected = new EventEmitter<Contact>();

  contacts: Contact[] = [
    new Contact(
      1,
      'R. Kent Jackson',
      'Jacksonk@byui.edu',
      '208-496-3771',
      '../../../assets/images/jacksonk.jpg',
      null
    ),
    new Contact(
      2,
      'Rex Barzee',
      'Barzee@byui.edu',
      '208-496-3768',
      '../../../assets/images/barzeer.jpg',
      null
    ),
  ];

  constructor() {}

  ngOnInit(): void {}

  onContactSelected(contact: Contact) {
    this.contactDetailSelected.emit(contact);
    console.log(contact.id + ': Contact-list');
  }
}
