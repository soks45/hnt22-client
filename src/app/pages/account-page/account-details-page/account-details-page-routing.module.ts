import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountDetailsPageComponent } from '@pages/account-page/account-details-page/account-details-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountDetailsPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountDetailsPageRoutingModule { }
