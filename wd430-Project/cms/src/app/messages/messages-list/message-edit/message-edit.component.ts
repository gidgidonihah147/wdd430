import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../../message.model';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  @ViewChild('subject', {static: true}) subjectInputRef: ElementRef;
  @ViewChild('msgText', {static: true}) msgTextInputRef: ElementRef;
  @Output() messageAdded = new EventEmitter<Message>();

  onSendMessage() {

    const ingSubject: string = this.subjectInputRef.nativeElement.value;
    const ingMsgText: string = this.msgTextInputRef.nativeElement.value;
    const msgID: number = 1;
    const sender: string = 'currentSender';
    const newMessage: Message = new Message(msgID,ingSubject, ingMsgText,sender);
    console.log(newMessage);
    console.log(' - Send Message');
    this.messageAdded.emit(newMessage);
  }
  onClear() {
    this.subjectInputRef.nativeElement.value ='';
    this.msgTextInputRef.nativeElement.value ='';
  }
}
