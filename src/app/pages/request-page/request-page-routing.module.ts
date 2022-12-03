import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestPageComponent } from '@pages/request-page/request-page.component';
import { GetRequestResolver } from 'app/resolvers/get-request.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'new',
    pathMatch: 'prefix'
  },
  {
    path: 'new',
    loadChildren: () => import('@pages/request-page/new-request-page/new-request-page.module')
      .then((m) => m.NewRequestPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('@pages/request-page/requests-list-page/requests-list-page.module')
      .then((m) => m.RequestsListPageModule)
  },
  {
    path: ':id',
    component: RequestPageComponent,
    resolve: {
      request: GetRequestResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestPageRoutingModule { }
