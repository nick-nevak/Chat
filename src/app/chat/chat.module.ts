import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [ChatListComponent, ChatRoomComponent],
  imports: [
    CommonModule,
    CoreModule
  ]
})
export class ChatModule { }
