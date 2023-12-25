import { Request, Response } from "express";
import { Transaction } from "./models";
import { validateTransaction } from "../../validators/validateTransaction";

export async function transactions(req: Request, res: Response) {
  const transactions = await Transaction.findAll({
    where: {
      userId: req.JwtDecodedData.id,
    },
  });
  return res.status(200).json({ transactions });
}

export async function transaction(req: Request, res: Response) {
  const { type, amount, date, description, categoryId } = req.body;

  try {
    const transaction = await validateTransaction(
      type,
      amount,
      date,
      description,
      categoryId
    );
    await Transaction.create({
      type: transaction.type,
      amount: transaction.amount,
      date: transaction.date,
      description: transaction.description,
      userId: req.JwtDecodedData.id,
      categoryId: transaction.categoryId,
    });

    return res.status(201).json({ message: "Transaction create successful" });
  } catch (errors: any) {
    return errors.name
      ? res
          .status(400)
          .json(
            errors.errors.map((item: any) => ({ [item.path]: item.message }))
          )
      : res.status(400).json(
          errors.map((error: any) => ({
            [error.property]: Object.values(error.constraints).join(", "),
          }))
        );
  }
}
