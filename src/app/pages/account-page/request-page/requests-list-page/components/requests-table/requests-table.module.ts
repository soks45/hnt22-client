import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsTableComponent } from './requests-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    RequestsTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatIconModule,
  ],
  exports: [
    RequestsTableComponent
  ]
})
export class RequestsTableModule { }
