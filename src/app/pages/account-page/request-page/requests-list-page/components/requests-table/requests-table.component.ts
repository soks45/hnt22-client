import { Component } from '@angular/core';
import { Organization } from '@models/organization';
import { CarrierRequest, RequestStatus } from '@models/request';
import { User } from '@models/user';
import { Vehicle } from '@models/vehicle';
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
  constructor(private auth: AuthService, private requests: RequestsService) {
    this.isAdmin$ = this.auth.isAdmin$;
    /*this.data$ = this.requests.getRequests();*/
    this.data$ = of(ELEMENT_DATA);
  }

  displayedColumns: string[] = ['organisation', 'requestId', 'vehicleNumber', 'status', 'actions'];
}
