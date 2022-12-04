import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { CarrierRequest } from '@models/request';
import {
  ShowQrDialogComponent, ShowQrDialogData
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/components/show-qr-dialog/show-qr-dialog.component';

import {
  UpdateRequestStatusDialogComponent,
  UpdateRequestStatusDialogData
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/components/update-request-status-dialog/update-request-status-dialog.component';
import { MessagesService } from '@services/messages.service';
import { AuthService } from '@services/auth.service';
import { QrCodesService } from '@services/qr-codes.service';
import { RequestsService } from '@services/requests.service';
import { Observable, takeUntil } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'hnt22-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.scss']
})
export class RequestsTableComponent extends DestroyMixin(BaseObject) {
  isAdmin$: Observable<boolean>;
  data$: Observable<CarrierRequest[]>;
  constructor(
    private auth: AuthService,
    private requests: RequestsService,
    private dialog: MatDialog,
    private messages: MessagesService,
    private qrService: QrCodesService
  ) {
    super();

    this.isAdmin$ = this.auth.isAdmin$;
    this.data$ = this.requests.getRequests();
    this.requests.requestChanges$.pipe(takeUntil(this.destroyed$), tap(() => this.data$ = this.requests.getRequests())).subscribe();
  }

  displayedColumns: string[] = ['organisation', 'requestId', 'vehicleNumber', 'status', 'actions'];

  edit(request: CarrierRequest): void {
    this.dialog.open(UpdateRequestStatusDialogComponent, {
      closeOnNavigation: true,
      backdropClass: 'std-backdrop',
      panelClass: 'update-request-status-dialog-panel',
      data: <UpdateRequestStatusDialogData> { request }
    })
  }
  deleteReq(request: CarrierRequest): void {
    this.messages.info('Функция недоступна в этой версии', 'Ок');
  }
  showCode(request: CarrierRequest): void {
    this.qrService.getQR(request.requestId).subscribe((value) => {
      this.dialog.open(ShowQrDialogComponent, {
        closeOnNavigation: true,
        backdropClass: 'std-backdrop',
        panelClass: 'show-qr-dialog-panel',
        data: <ShowQrDialogData> { hash: value.key }
      });
    })
  }
}
