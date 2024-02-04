import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent implements OnInit {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document(0, 'DocTemp', 'This is a sample document', 'exampleURL1', 'Me'),
    new Document(1, 'DocTemp2', 'This is a sample document', 'exampleURL2', 'Me'),
    new Document(2, 'DocTemp3', 'This is a sample document', 'exampleURL3', 'Me'),
    new Document(3, 'DocTemp4', 'This is a sample document', 'exampleURL4', 'Me'),
    new Document(4, 'DocTemp5', 'This is a sample document', 'exampleURL5', 'Me'),
  ];

  constructor() {}

  ngOnInit(): void {}

  onDocumentSelected(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
