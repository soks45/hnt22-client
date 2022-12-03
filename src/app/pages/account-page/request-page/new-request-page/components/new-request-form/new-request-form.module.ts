import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NewRequestFormComponent } from 'app/pages/account-page/request-page/new-request-page/components/new-request-form/new-request-form.component';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    NewRequestFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    NewRequestFormComponent
  ]
})
export class NewRequestFormModule { }
