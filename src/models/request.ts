export enum RequestStatus {
  Send = 'send',
  Processing = 'processing',
  Rejected = 'rejected',
  Accepted = 'accepted'

}
export interface Request {
  requestDate: Date;
  status: RequestStatus;
  startDate: Date;
  endDate: Date;
  userId: number;
  organizationId: number;
  requestId: number;
}
