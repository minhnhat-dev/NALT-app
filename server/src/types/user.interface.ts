export enum UserRole {
  admin = "admin",
  guest = "guest",
  restrict = "restrict",
}

export interface UserData {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  image?: string;
}

export interface UsersData extends Array<UserData> {}
