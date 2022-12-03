import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  StatusPipe
} from 'app/pipes/status.pipe';
import {
  RequestsTableModule
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/requests-table.module';
import { RequestsListPageRoutingModule } from 'app/pages/account-page/request-page/requests-list-page/requests-list-page-routing.module';
import { RequestsListPageComponent } from 'app/pages/account-page/request-page/requests-list-page/requests-list-page.component';


@NgModule({
  declarations: [
    RequestsListPageComponent
  ],
  imports: [
    CommonModule,
    RequestsListPageRoutingModule,
    RequestsTableModule,
  ]
})
export class RequestsListPageModule { }
