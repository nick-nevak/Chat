import { Component, OnInit } from '@angular/core';
import * as signalR from '@microsoft/signalr';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  connection: signalR.HubConnection;

  constructor() { }

  ngOnInit(): void {
    this.listen();
  }

  listen() {

    const divMessages: HTMLDivElement = document.querySelector("#divMessages");
    const tbMessage: HTMLInputElement = document.querySelector("#tbMessage");
    const btnSend: HTMLButtonElement = document.querySelector("#btnSend");
    const username = new Date().getTime();

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://localhost:44321/chatHub")
      .build();

    connection.on("ReceiveMessage", (username: string, message: string) => {
      debugger;
      let messages = document.createElement("div");

      messages.innerHTML =
        `<div class="message-author">${username}</div><div>${message}</div>`;

      divMessages.appendChild(messages);
      divMessages.scrollTop = divMessages.scrollHeight;
    });

    connection.start()
        .then(_ => console.log('connected!'))
        .catch(err => document.write(err));

    tbMessage.addEventListener("keyup", (e: KeyboardEvent) => {
      if (e.key === "Enter") {
        send();
      }
    });

    btnSend.addEventListener("click", send);

    function send() {
      debugger;
      connection.invoke("SendMessage", `${username}`, tbMessage.value)
        .then(() => tbMessage.value = "");
    }
  }

}
