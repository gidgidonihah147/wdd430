import { Component, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { Message } from '../../message.model';
import { MessagesService } from '../../messages.service';

@Component({
  selector: 'app-message-edit',
  templateUrl: './message-edit.component.html',
  styleUrl: './message-edit.component.css'
})
export class MessageEditComponent {
  @ViewChild('subject', {static: true}) subjectInputRef: ElementRef;
  @ViewChild('msgText', {static: true}) msgTextInputRef: ElementRef;

  constructor(private MessagesService: MessagesService){

  }
  onSendMessage() {
    const ingSubject: string = this.subjectInputRef.nativeElement.value;
    const ingMsgText: string = this.msgTextInputRef.nativeElement.value;
    const msgID: string = '1';
    const sender: string = '147';
    const newMessage: Message = new Message(msgID,ingSubject,ingMsgText,sender);
    console.log(newMessage + ' - Send Message');
    this.MessagesService.addMessage(newMessage);
  }
  onClear() {
    this.subjectInputRef.nativeElement.value ='';
    this.msgTextInputRef.nativeElement.value ='';
  }
}
