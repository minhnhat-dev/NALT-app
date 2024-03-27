export enum TransactionType {
  income = "income",
  expense = "expense",
}

export interface TransactionData {
  type: TransactionType;
  amount: number;
  date: string;
  description?: string;
  userId?: string;
  categoryId?: string;
}

export interface CategoriesData extends Array<TransactionData> {}
