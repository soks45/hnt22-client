import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetRequestResolver } from 'app/resolvers/get-request.resolver';

const routes: Routes = [

  {
    path: 'new',
    loadChildren: () => import('@pages/account-page/request-page/new-request-page/new-request-page.module')
      .then((m) => m.NewRequestPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('@pages/account-page/request-page/requests-list-page/requests-list-page.module')
      .then((m) => m.RequestsListPageModule)
  },
  {
    path: '**',
    redirectTo: 'new',
    pathMatch: 'prefix'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestPageRoutingModule { }
