import { Organization } from '@models/organization';
import { User } from '@models/user';
import { Vehicle } from '@models/vehicle';

export enum RequestStatus {
  Send = 'send',
  Processing = 'processing',
  Rejected = 'rejected',
  Accepted = 'accepted'

}
export interface CarrierRequest {
  requestDate: Date;
  status: RequestStatus;
  user: User;
  organization: Organization;
  requestId: number;
  vehicle: Vehicle;
}
