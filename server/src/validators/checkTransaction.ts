import {
  IsNotEmpty,
  IsOptional,
  validateOrReject,
  IsDateString,
  IsUUID,
} from "class-validator";

class Transaction {
  @IsNotEmpty()
  type: string;

  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  description: string;

  @IsUUID()
  categoryId: string;

  constructor(
    type: string,
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

export async function checkTransaction(
  type: string,
  amount: number,
  date: string,
  description: string,
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
