import {
  IsNotEmpty,
  IsOptional,
  validateOrReject,
  IsDateString,
} from "class-validator";

class Transaction {
  @IsNotEmpty()
  amount: number;

  @IsNotEmpty()
  category: string;

  @IsNotEmpty()
  @IsDateString()
  date: string;

  @IsOptional()
  description: string;

  constructor(
    amount: number,
    category: string,
    date: string,
    description: string
  ) {
    this.amount = amount;
    this.category = category;
    this.date = date;
    this.description = description;
  }
}

export default async function (
  amount: number,
  category: string,
  date: string,
  description: string = ""
) {
  try {
    const transaction = new Transaction(amount, category, date, description);
    await validateOrReject(transaction);
    return transaction;
  } catch (error) {
    throw error;
  }
}
