import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';

export const loginRoutes: Routes = [
    // { path: 'login', component: LoginComponent }
  ];

  @NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
  })
  export class LoginRoutingModule { }