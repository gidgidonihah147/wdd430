import { Component, OnInit } from '@angular/core';
import { DocumentService } from './document.service';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrl: './documents.component.css',
  providers: [DocumentService]
})
export class DocumentsComponent implements OnInit{
  selectedDocument: Document;

  constructor(private DocumentService:DocumentService){

  }
ngOnInit(): void {
    this.DocumentService.documentSelectedEvent
    .subscribe(
      (document: Document) => {
        this.selectedDocument = document;
      }
    );
}
}
