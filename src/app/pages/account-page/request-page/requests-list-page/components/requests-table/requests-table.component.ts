import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DestroyMixin } from '@mixins/destroy.mixin';
import { BaseObject } from '@mixins/mixins';
import { CarrierRequest } from '@models/request';

import {
  UpdateRequestStatusDialogComponent, UpdateRequestStatusDialogData
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/components/update-request-status-dialog/update-request-status-dialog.component';
import { DeleteConfirmationStatusDialogComponent } from './components/delete-confirmation-status-dialog/delete-confirmation-status-dialog.component';
import { QrCodeComponent } from '@ui/qr-code/qr-code.component';
import { AuthService } from '@services/auth.service';
import { RequestsService } from '@services/requests.service';
import { Observable, of, takeUntil } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'hnt22-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.scss']
})
export class RequestsTableComponent extends DestroyMixin(BaseObject) {
  isAdmin$: Observable<boolean>;
  data$: Observable<CarrierRequest[]>;
  constructor(private auth: AuthService, private requests: RequestsService, private dialog: MatDialog) {
    super();

    this.isAdmin$ = this.auth.isAdmin$;
    this.data$ = this.requests.getRequests();
    this.requests.requestChanges$.pipe(takeUntil(this.destroyed$), tap(() => this.data$ = this.requests.getRequests())).subscribe();
  }

  displayedColumns: string[] = ['organisation', 'requestId', 'vehicleNumber', 'status', 'actions'];

  edit(request: CarrierRequest): void {
    this.dialog.open(UpdateRequestStatusDialogComponent, {
      closeOnNavigation: true,
      backdropClass: 'update-request-status-dialog-backdrop',
      panelClass: 'update-request-status-dialog-panel',
      data: <UpdateRequestStatusDialogData> { request }
    })
  }
  deleteReq(request: CarrierRequest): void {
    this.dialog.open(DeleteConfirmationStatusDialogComponent, {
      closeOnNavigation: true,
      backdropClass: 'update-request-status-dialog-backdrop',
      panelClass: 'update-request-status-dialog-panel',
      data: <UpdateRequestStatusDialogData> { request }
    })
  }
  showCode(request: CarrierRequest): void {
    this.dialog.open(QrCodeComponent, {
      closeOnNavigation: true,
      backdropClass: 'update-request-status-dialog-backdrop',
      panelClass: 'update-request-status-dialog-panel',
      data: <UpdateRequestStatusDialogData> { request }
    })
  }
}
