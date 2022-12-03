import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageRoutingModule } from '@pages/account-page/request-page/request-page-routing.module';
import { RequestPageComponent } from '@pages/account-page/request-page/request-page.component';


@NgModule({
  declarations: [
    RequestPageComponent
  ],
  imports: [
    CommonModule,
    RequestPageRoutingModule
  ]
})
export class RequestPageModule { }
