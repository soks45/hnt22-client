import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsListPageRoutingModule } from './requests-list-page-routing.module';
import { RequestsListPageComponent } from './requests-list-page.component';


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
