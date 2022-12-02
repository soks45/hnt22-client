export interface User extends UserDetails {
  userId: number;
}
export interface UserDetails {
  username: string;
  firstName: string;
  lastName: string;
  avatarUrl: string;
}
