import {
  IsEmail,
  IsStrongPassword,
  IsString,
  validateOrReject,
} from "class-validator";

class User {
  @IsEmail()
  private email: string;

  @IsStrongPassword()
  private password: string;

  @IsString()
  private name: string;

  constructor(email: string, password: string, name: string) {
    this.email = email;
    this.password = password;
    this.name = name;
  }

  public get getEmail(): string {
    return this.email;
  }

  public get getPassword(): string {
    return this.password;
  }

  public get getName(): string {
    return this.name;
  }
}

export default async function (
  email: string,
  password: string,
  name: string = ""
): Promise<User> {
  const user = new User(email, password, name);

  try {
    await validateOrReject(user);
    return user;
  } catch (error) {
    throw error;
  }
}
