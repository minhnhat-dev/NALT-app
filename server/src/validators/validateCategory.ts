import { IsNotEmpty, validateOrReject } from "class-validator";
import { CategoryType } from "../types/category.interface";

class Category {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  type: CategoryType;

  constructor(name: string, type: CategoryType) {
    this.name = name;
    this.type = type;
  }
}

export async function validateCategory(
  name: string,
  type: CategoryType = CategoryType.income
) {
  try {
    const category = new Category(name, type);
    await validateOrReject(category);
    return category;
  } catch (error) {
    throw error;
  }
}
