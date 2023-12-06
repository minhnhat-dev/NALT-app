import {
  IsDateString,
  IsNotEmpty,
  IsOptional,
  validateOrReject,
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

  constructor(type: string, amount: number, date: string, description: string) {
    this.type = type;
    this.amount = amount;
    this.date = date;
    this.description = description;
  }
}

export async function validateTransaction(
  type: string,
  amount: number,
  date: string,
  description: string = ""
) {
  try {
    const transaction = new Transaction(type, amount, date, description);
    await validateOrReject(transaction);
    return transaction;
  } catch (error) {
    throw error;
  }
}
