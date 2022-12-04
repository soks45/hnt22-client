import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarModule } from '@ui/side-bar/side-bar.module';

import { AccountPageRoutingModule } from './account-page-routing.module';
import { AccountPageComponent } from 'app/pages/account-page/account-page.component';
import { PageHeaderModule } from '@ui/page-header/page-header.module';


@NgModule({
  declarations: [
    AccountPageComponent,
  ],
  imports: [
    CommonModule,
    AccountPageRoutingModule,
    SideBarModule,
    PageHeaderModule
  ]
})
export class AccountPageModule { }
