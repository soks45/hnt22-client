import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewRequestPageComponent } from '@pages/request-page/new-request-page/new-request-page.component';

const routes: Routes = [
  {
    path: '',
    component: NewRequestPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewRequestPageRoutingModule { }
