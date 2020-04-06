import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { SignalrService } from '../services/signalr/signalr.service';
import { tap } from 'rxjs/operators'
import { Message } from '../models/message';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  get username(): string { return this.authService.username; }

  newMessage: string = '';
  messages: Message[] = [];

  @ViewChild('messagesContainer') messagesContainer: ElementRef;

  constructor(private signalrService: SignalrService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.signalrService.startConnection();
    this.signalrService.onNewMessage$
      .pipe(
        tap(m => this.appendNewMessage(m))
      ).subscribe();
  }

  onEnter(value: string) {
    this.sendMessage();
  }

  appendNewMessage(message: Message) {
    console.log('container:', this.messagesContainer.nativeElement);
    debugger;
    this.messages.push(message);
    setTimeout(() => {
      const scrollHeight = this.messagesContainer.nativeElement.scrollHeight;
      this.messagesContainer.nativeElement.scrollTop = scrollHeight;
    }, 10);
  }

  async sendMessage(){
    const message = {
      username: this.authService.username,
      messageContent: this.newMessage
    }
    await this.signalrService.sendMessage(message);
    console.log('message sent', message);
    this.newMessage = '';
  }

}
