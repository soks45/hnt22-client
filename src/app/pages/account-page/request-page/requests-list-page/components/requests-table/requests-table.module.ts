import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  ShowQrDialogModule
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/components/show-qr-dialog/show-qr-dialog.module';
import {
  UpdateRequestStatusDialogModule
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/components/update-request-status-dialog/update-request-status-dialog.module';
import { PipesModule } from 'app/pipes/pipes.module';
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
        UpdateRequestStatusDialogModule,
        PipesModule,
        ShowQrDialogModule,
        MatTooltipModule
    ],
  exports: [
    RequestsTableComponent
  ]
})
export class RequestsTableModule { }
