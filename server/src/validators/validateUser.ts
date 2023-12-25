import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  validateOrReject,
} from "class-validator";
import { UserRole } from "../types/user.interface";

class User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  role: UserRole;

  constructor(email: string, password: string, name: string, role: UserRole) {
    this.email = email;
    this.password = password;
    this.name = name;
    this.role = role;
  }
}

export async function validateUser(
  email: string,
  password: string,
  name: string = "",
  role: UserRole = UserRole.guest
) {
  try {
    const user = new User(email, password, name, role);
    await validateOrReject(user);
    return user;
  } catch (error) {
    throw error;
  }
}
