export interface CategoryData {
  name: string;
  type: "income" | "expense";
  userId?: string;
  image?:string
}

export interface CategoriesData extends Array<CategoryData>{}