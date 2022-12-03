import { Organization } from '@models/organization';

export interface User extends UserDetails {
  userId: number;
  isAdmin: boolean;
}
export interface UserDetails {
  login: string;
  firstName: string;
  lastName: string;
  organization: Organization;
  jobTitle: string;
}
