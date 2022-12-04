import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QrCodeModule } from '@ui/qr-code/qr-code.module';
import { ShowQrDialogComponent } from './show-qr-dialog.component';



@NgModule({
  declarations: [
    ShowQrDialogComponent
  ],
  imports: [
    CommonModule,
    QrCodeModule
  ],
  exports: [
    ShowQrDialogComponent
  ]
})
export class ShowQrDialogModule { }
