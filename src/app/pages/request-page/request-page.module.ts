import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestPageRoutingModule } from 'app/pages/request-page/request-page-routing.module';
import { RequestPageComponent } from 'app/pages/request-page/request-page.component';


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
