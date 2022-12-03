import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewRequestPageRoutingModule } from '@pages/request-page/new-request-page/new-request-page-routing.module';
import { NewRequestPageComponent } from './new-request-page.component';


@NgModule({
  declarations: [
    NewRequestPageComponent
  ],
  imports: [
    CommonModule,
    NewRequestPageRoutingModule
  ]
})
export class NewRequestPageModule { }
