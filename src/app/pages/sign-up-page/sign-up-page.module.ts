import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignUpPageRoutingModule } from './sign-up-page-routing.module';
import { SignUpPageComponent } from './sign-up-page.component';
import { PageHeaderModule } from '@ui/page-header/page-header.module';


@NgModule({
  declarations: [
    SignUpPageComponent
  ],
  imports: [
    CommonModule,
    SignUpPageRoutingModule,
    PageHeaderModule
  ]
})
export class SignUpPageModule { }
