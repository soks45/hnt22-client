import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestsListPageComponent } from '@pages/account-page/request-page/requests-list-page/requests-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: RequestsListPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestsListPageRoutingModule { }
