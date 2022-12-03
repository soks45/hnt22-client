import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NewRequestPageComponent } from '@pages/account-page/request-page/new-request-page/new-request-page.component';
import { NewRequestFormComponent } from 'app/pages/account-page/request-page/new-request-page/components/new-request-form/new-request-form.component';



@NgModule({
  declarations: [
    NewRequestFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [
    NewRequestFormComponent
  ]
})
export class NewRequestFormModule { }
