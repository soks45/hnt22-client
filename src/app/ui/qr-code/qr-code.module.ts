import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { QrCodeComponent } from './qr-code.component';
import { QRCodeModule } from 'angularx-qrcode';


@NgModule({
  declarations: [
    QrCodeComponent
  ],
  imports: [
    CommonModule,
    QRCodeModule,
    MatButtonModule,
  ],
  exports: [
    QrCodeComponent
  ]
})
export class QrCodeModule { }
