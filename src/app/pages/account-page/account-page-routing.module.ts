import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountPageComponent } from '@pages/account-page/account-page.component';

const routes: Routes = [
  {
    path: '',
    component: AccountPageComponent,
    children: [
      {
        path: 'details',
        loadChildren: () => import('@pages/account-page/account-details-page/account-details-page.module')
          .then((m) => m.AccountDetailsPageModule)
      },
      {
        path: 'request',
        loadChildren: () => import('@pages/account-page/request-page/request-page.module')
          .then((m) => m.RequestPageModule)
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'prefix'
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountPageRoutingModule { }
