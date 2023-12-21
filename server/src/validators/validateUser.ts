import {
  IsEmail,
  IsNotEmpty,
  IsStrongPassword,
  IsOptional,
  validateOrReject,
} from "class-validator";

class User {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @IsOptional()
  name: string;

  @IsOptional()
  role: string;

  constructor(email: string, password: string, name: string, role: string) {
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
  role: string = "guest"
) {
  try {
    const user = new User(email, password, name, role);
    await validateOrReject(user);
    return user;
  } catch (error) {
    throw error;
  }
}
