import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsListPageRoutingModule } from 'app/pages/account-page/request-page/requests-list-page/requests-list-page-routing.module';
import { RequestsListPageComponent } from 'app/pages/account-page/request-page/requests-list-page/requests-list-page.component';


@NgModule({
  declarations: [
    RequestsListPageComponent
  ],
  imports: [
    CommonModule,
    RequestsListPageRoutingModule
  ]
})
export class RequestsListPageModule { }
