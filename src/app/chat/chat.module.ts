import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';



@NgModule({
  declarations: [ChatListComponent, ChatRoomComponent],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
