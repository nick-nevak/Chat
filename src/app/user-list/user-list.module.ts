import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user-list/user-list.component';



@NgModule({
  declarations: [UserComponent, UserListComponent],
  imports: [
    CommonModule
  ]
})
export class UserListModule { }
