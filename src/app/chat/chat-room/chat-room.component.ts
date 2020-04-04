import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { SignalrService } from '../services/signalr/signalr.service';
import { tap } from 'rxjs/operators'
import { Message } from '../models/message';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  newMessage: string;

  private divMessages: HTMLDivElement;

  constructor(private signalrService: SignalrService) { }

  ngOnInit(): void {
    this.signalrService.startConnection();
    this.selectHTMLElements();
    this.signalrService.onNewMessage$
      .pipe(
        tap(m => this.createNewMessage(m))
      ).subscribe();
  }

  selectHTMLElements(){
    this.divMessages = document.querySelector("#divMessages");
  }

  onEnter(value: string) {
    this.sendMessage();
  }

  createNewMessage(message: Message){
    let messages = document.createElement("div");
    messages.innerHTML =
      `<div class="message-author">${message.username}</div><div>${message.messageContent}</div>`;
    this.divMessages.appendChild(messages);
    this.divMessages.scrollTop = this.divMessages.scrollHeight;
  }

  async sendMessage(){
    const message = {
      username: new Date().getTime().toString(),
      messageContent: this.newMessage
    }
    await this.signalrService.sendMessage(message);
    console.log('message sent', message);
    this.newMessage = '';
  }

}
