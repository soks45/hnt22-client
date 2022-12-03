import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/main-page/main-page.module')
      .then((m) => m.MainPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@pages/sign-in-page/sign-in-page.module')
      .then((m) => m.SignInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('@pages/sign-up-page/sign-up-page.module')
      .then((m) => m.SignUpPageModule)
  },
  {
    path: 'check-qr-code/:id',
    loadChildren: () =>  import('@pages/check-qr-code-page/check-qr-code-page.module')
      .then((m) => m.CheckQrCodePageModule),
  },
  {
    path: 'qr-code',
    loadChildren: () => import('@pages/qr-code-page/qr-code-page.module')
      .then((m) => m.QrCodePageModule)
  },
  {
    path: 'request',
    loadChildren: () => import('@pages/request-page/request-page.module')
      .then((m) => m.RequestPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('@pages/not-found-page/not-found-page.module')
      .then((m) => m.NotFoundPageModule)
  },
  {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
