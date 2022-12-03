import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignInPageRoutingModule } from './sign-in-page-routing.module';
import { SignInPageComponent } from './sign-in-page.component';
import { LoginFormModule } from './components/login-form/login-form.module';


@NgModule({
  declarations: [
    SignInPageComponent
  ],
  imports: [
    CommonModule,
    SignInPageRoutingModule,
    LoginFormModule
  ]
})
export class SignInPageModule { }
