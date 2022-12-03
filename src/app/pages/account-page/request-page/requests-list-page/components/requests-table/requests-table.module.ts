import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestsTableComponent } from './requests-table.component';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    RequestsTableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [
    RequestsTableComponent
  ]
})
export class RequestsTableModule { }
