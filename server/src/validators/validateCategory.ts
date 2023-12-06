import { IsNotEmpty, validateOrReject } from "class-validator";

class Category {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }
}

export async function validateCategory(name: string, type: string) {
  try {
    const category = new Category(name, type);
    await validateOrReject(category);
    return category;
  } catch (error) {
    throw error;
  }
}
