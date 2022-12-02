import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QrCodePageComponent } from '@pages/qr-code-page/qr-code-page.component';

const routes: Routes = [
  {
    path: '',
    component: QrCodePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundPageRoutingModule { }
