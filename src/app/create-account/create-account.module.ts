import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountComponent } from './create-account/create-account.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CoreModule
  ]
})
export class CreateAccountModule { }
