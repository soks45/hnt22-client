import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from '@pages/account-page/account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent
  },
  {
    path: 'request',
    loadChildren: () => import('@pages/account-page/request-page/request-page.module')
      .then((m) => m.RequestPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPageRoutingModule { }