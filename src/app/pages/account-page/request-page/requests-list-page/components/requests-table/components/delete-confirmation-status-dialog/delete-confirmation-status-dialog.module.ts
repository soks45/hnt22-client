import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { DeleteConfirmationStatusDialogComponent } from './delete-confirmation-status-dialog.component';



@NgModule({
  declarations: [
    DeleteConfirmationStatusDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [
    DeleteConfirmationStatusDialogComponent
  ]
})
export class DeleteConfirmationStatusDialogModule { }
