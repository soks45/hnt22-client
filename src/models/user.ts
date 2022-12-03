export interface User extends UserDetails {
  userId: number;
  isAdmin: boolean;
}
export interface UserDetails {
  login: string;
  firstName: string;
  lastName: string;
  organizationId: number;
  jobTitle: string;
}
