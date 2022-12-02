import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckQrCodePageRoutingModule } from './check-qr-code-page-routing.module';
import { CheckQrCodePageComponent } from './check-qr-code-page.component';

@NgModule({
  declarations: [
    CheckQrCodePageComponent
  ],
  imports: [
    CommonModule,
    CheckQrCodePageRoutingModule
  ]
})
export class CheckQrCodePageModule { }
