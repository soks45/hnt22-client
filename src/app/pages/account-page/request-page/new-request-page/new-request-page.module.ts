import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NewRequestFormModule
} from '@pages/account-page/request-page/new-request-page/components/new-request-form/new-request-form.module';
import { NewRequestPageRoutingModule } from '@pages/account-page/request-page/new-request-page/new-request-page-routing.module';
import { NewRequestPageComponent } from 'app/pages/account-page/request-page/new-request-page/new-request-page.component';


@NgModule({
  declarations: [
    NewRequestPageComponent,
  ],
  imports: [
    CommonModule,
    NewRequestPageRoutingModule,
    NewRequestFormModule
  ]
})
export class NewRequestPageModule { }
