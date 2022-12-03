import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Organization } from '@models/organization';
import { CarrierRequest, RequestStatus } from '@models/request';
import { User } from '@models/user';
import { Vehicle } from '@models/vehicle';
import {
  UpdateRequestStatusDialogComponent, UpdateRequestStatusDialogData
} from '@pages/account-page/request-page/requests-list-page/components/requests-table/components/update-request-status-dialog/update-request-status-dialog.component';
import { DeleteConfirmationStatusDialogComponent } from './components/delete-confirmation-status-dialog/delete-confirmation-status-dialog.component';
import { QrCodeComponent } from '@ui/qr-code/qr-code.component';
import { AuthService } from '@services/auth.service';
import { RequestsService } from '@services/requests.service';
import { Observable, of } from 'rxjs';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: CarrierRequest[] = [
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
  { organization: { name: 'dawdwa' } as Organization, requestId: 1, status: RequestStatus.Accepted, vehicle: { vehicleNumber: 'a123vs' } as Vehicle } as CarrierRequest,
];
@Component({
  selector: 'hnt22-requests-table',
  templateUrl: './requests-table.component.html',
  styleUrls: ['./requests-table.component.scss']
})
export class RequestsTableComponent {
  isAdmin$: Observable<boolean>;
  data$: Observable<CarrierRequest[]>;
  constructor(private auth: AuthService, private requests: RequestsService, private dialog: MatDialog) {
    this.isAdmin$ = this.auth.isAdmin$;
    /*this.data$ = this.requests.getRequests();*/
    this.data$ = of(ELEMENT_DATA);
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
