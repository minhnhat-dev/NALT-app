export enum CategoryType {
  income = "income",
  expense = "expense",
}

export interface CategoryData {
  name: string;
  type: CategoryType;
  userId?: string;
  image?: string;
}

export interface CategoriesData extends Array<CategoryData> {}
