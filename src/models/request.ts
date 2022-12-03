export enum RequestStatus {
  Send = 'send',
  Processing = 'processing',
  Rejected = 'rejected',
  Accepted = 'accepted'

}
export interface Request {
  requestDate: Date;
  status: RequestStatus;
  userId: number;
  organizationId: number;
  requestId: number;
}
