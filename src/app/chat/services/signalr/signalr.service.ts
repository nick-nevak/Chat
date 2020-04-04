import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs';
import { Message } from '../../models/message';
import { HubConnection, HubConnectionBuilder, HubConnectionState } from '@microsoft/signalr';

export const serverUrl = "https://localhost:44321/chatHub";

@Injectable({
  providedIn: 'root'
})
export class SignalrService {

  onNewMessage$: Subject<Message> = new Subject<Message>();

  private connection: HubConnection;
  private chanelName = 'ReceiveMessage';
  private methodName = 'SendMessage';

  constructor() { }

  startConnection() {
    if (this.connection &&
      (this.connection.state === HubConnectionState.Connected
        || this.connection.state === HubConnectionState.Connecting
        || this.connection.state === HubConnectionState.Reconnecting)) {
      return;
    }

    this.connection = new HubConnectionBuilder()
      .withUrl(serverUrl)
      .build();

    this.connection.start()
      .then(_ => console.log('connected!'))
      .catch(err => console.log(err));

    this.connection.on(this.chanelName, (message: Message) => {
      this.onNewMessage$.next(message);
    });
  }

  async sendMessage(message: Message): Promise<any> {
    return this.connection.invoke(this.methodName, message);
  }

}
