import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { CreateAccountModule } from './create-account/create-account.module';
import { ChatModule } from './chat/chat.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    LoginModule,
    CreateAccountModule,
    ChatModule,
    MaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
