import {
  IsDateString,
  IsNotEmpty,
  IsUUID,
  validateOrReject,
} from "class-validator";
import { TransactionType } from "../types/transaction.interface";

class Transaction {
  @IsNotEmpty()
  type: TransactionType;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsUUID()
  categoryId: string;

  constructor(
    type: TransactionType,
    amount: number,
    date: string,
    description: string,
    categoryId: string
  ) {
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.description = description;
    this.categoryId = categoryId;
  }
}

export async function validateTransaction(
  type: TransactionType = TransactionType.income,
  amount: number,
  date: string,
  description: string = "",
  categoryId: string
) {
  try {
    const transaction = new Transaction(
      type,
      amount,
      date,
      description,
      categoryId
    );
    await validateOrReject(transaction);
    return transaction;
  } catch (error) {
    throw error;
  }
}
