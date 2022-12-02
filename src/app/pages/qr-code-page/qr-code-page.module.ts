import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageRoutingModule } from '@pages/qr-code-page/qr-code-page-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodePageComponent } from './qr-code-page.component';



@NgModule({
  declarations: [
    QrCodePageComponent
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
    QRCodeModule
  ]
})
export class QrCodePageModule { }
