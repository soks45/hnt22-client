export interface User extends UserDetails {
  userId: number;
}
export interface UserDetails {
  login: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
  organizationId: number;
  jobTitle: string;
}
