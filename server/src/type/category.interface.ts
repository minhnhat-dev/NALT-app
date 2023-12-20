export interface CategoryData {
  name: string;
  type: "income" | "expense";
  userId?: string;
}

export interface CategoriesData extends Array<CategoryData>{}