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

  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.password = password;
    this.name = name;
  }
}

export default async function (
  email: string,
  password: string,
  name: string = ""
) {
  try {
    const user = new User(email, password, name);
    await validateOrReject(user);
    return user;
  } catch (error) {
    throw error;
  }
}
