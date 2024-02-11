import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Document } from '../document.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'app-document-list',
  templateUrl: './document-list.component.html',
  styleUrl: './document-list.component.css',
})
export class DocumentListComponent implements OnInit {
  @Output() documentSelectedEvent = new EventEmitter<Document>();

  documents: Document[] = [];

  constructor(private DocumentService: DocumentService) {}

  ngOnInit(): void {
    this.documents = this.DocumentService.getDocuments();
  }

  // onDocumentSelected(document: Document) {
  //   this.documentSelectedEvent.emit(document);
  //   console.log(document + ' - Document List')
  // }
}
