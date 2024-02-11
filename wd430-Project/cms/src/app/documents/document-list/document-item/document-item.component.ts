import { Component } from '@angular/core';
import { EventEmitter, Input, Output } from '@angular/core';
import { Document } from '../../document.model';
import { DocumentService } from '../../document.service';

@Component({
  selector: 'app-document-item',
  templateUrl: './document-item.component.html',
  styleUrl: './document-item.component.css'
})
export class DocumentItemComponent {
  @Input() document: Document;
  @Output() documentSelected = new EventEmitter<void>();

  constructor(private DocumentService: DocumentService){

  }
  onSelected(){
    this.DocumentService.documentSelectedEvent.emit(this.document);
  }
}
