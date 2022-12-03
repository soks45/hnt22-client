import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckQrCodePageRoutingModule } from './check-qr-code-page-routing.module';
import { CheckQrCodePageComponent } from './check-qr-code-page.component';
import { OkResultModule } from './components/ok-result/ok-result.module';
import { BadResultModule } from './components/bad-result/bad-result.module';

@NgModule({
  declarations: [
    CheckQrCodePageComponent
  ],
  imports: [

CommonModule,
    CheckQrCodePageRoutingModule,
    OkResultModule,
    BadResultModule
  ]
})
export class CheckQrCodePageModule { }
