import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CoreModule } from '../core/core.module';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [ChatListComponent, ChatRoomComponent, MessageComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ChatModule { }
