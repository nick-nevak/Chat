import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CreateAccountComponent } from './create-account/create-account/create-account.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { UserListComponent } from './user-list/user-list/user-list.component';
import { ChatRoomComponent } from './chat/chat-room/chat-room.component';
import { AuthGuard } from './core/auth/auth.guard';


const routes: Routes = [
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'chat-list', component: ChatListComponent },
  { path: 'chat-room', component: ChatRoomComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '',   redirectTo: '/chat-room', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

const protectedRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '', 
    canActivateChild: [AuthGuard],
    children: routes
  }
]

@NgModule({
  imports: [RouterModule.forRoot(protectedRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
