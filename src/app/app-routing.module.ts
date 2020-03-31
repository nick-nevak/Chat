import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { CreateAccountComponent } from './create-account/create-account/create-account.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { UserListComponent } from './user-list/user-list/user-list.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'chat-list', component: ChatListComponent },
  { path: 'user-list', component: UserListComponent },
  { path: '',   redirectTo: '/login', pathMatch: 'full' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
