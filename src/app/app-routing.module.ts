import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@guards/auth.guard';
import { CheckQrCodeResolver } from 'app/resolvers/check-qr-code.resolver';
import { GetUserResolver } from 'app/resolvers/get-user.resolver';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full'
  },
  {
    path: 'account',
    loadChildren: () => import('@pages/account-page/account-page.module')
      .then((m) => m.AccountPageModule),
    canActivate: [AuthGuard],
    resolve: {
      user: GetUserResolver
    }
  },
  {
    path: 'sign-in',
    loadChildren: () => import('@pages/sign-in-page/sign-in-page.module')
      .then((m) => m.SignInPageModule)
  },
  {
    path: 'check-qr-code/:id',
    loadChildren: () =>  import('@pages/check-qr-code-page/check-qr-code-page.module')
      .then((m) => m.CheckQrCodePageModule),
    resolve: {
      request: CheckQrCodeResolver
    }
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
