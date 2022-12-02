import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckQrCodePageComponent } from '@pages/check-qr-code-page/check-qr-code-page.component';
import { CheckQrCodeResolver } from 'app/resolvers/check-qr-code.resolver';

const routes: Routes = [
  {
    path: '',
    component: CheckQrCodePageComponent,
    resolve: {
      isOk: CheckQrCodeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckQrCodePageRoutingModule { }
