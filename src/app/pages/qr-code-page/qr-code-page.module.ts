import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageRoutingModule } from '@pages/qr-code-page/qr-code-page-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { QrCodePageComponent } from './qr-code-page.component';
import { PageHeaderModule } from '@ui/page-header/page-header.module';



@NgModule({
  declarations: [
    QrCodePageComponent
  ],
  imports: [
    CommonModule,
    NotFoundPageRoutingModule,
    QRCodeModule,
    PageHeaderModule
  ]
})
export class QrCodePageModule { }
