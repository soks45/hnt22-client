import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { PipesModule } from 'app/pipes/pipes.module';
import { UpdateRequestStatusDialogComponent } from './update-request-status-dialog.component';



@NgModule({
  declarations: [
    UpdateRequestStatusDialogComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    PipesModule
  ],
  exports: [
    UpdateRequestStatusDialogComponent
  ]
})
export class UpdateRequestStatusDialogModule { }
