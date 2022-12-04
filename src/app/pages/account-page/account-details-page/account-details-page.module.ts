import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountDetailsPageRoutingModule } from './account-details-page-routing.module';
import { AccountDetailsPageComponent } from './account-details-page.component';


@NgModule({
  declarations: [
    AccountDetailsPageComponent
  ],
  imports: [
    CommonModule,
    AccountDetailsPageRoutingModule
  ]
})
export class AccountDetailsPageModule { }
