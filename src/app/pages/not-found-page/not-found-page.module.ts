import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageRoutingModule } from '@pages/not-found-page/not-found-page-routing.module';
import { NotFoundPageComponent } from './not-found-page.component';



@NgModule({
  declarations: [
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule
  ]
})
export class NotFoundPageModule { }
