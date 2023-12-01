import { Request, Response } from "express";
import { Transaction } from "./models";
import { checkTransaction } from "../../validators/checkTransaction";

// Transaction.sync({force: true})
// Category.sync({force: true})

export async function getTransactions(req: Request, res: Response) {
  const transactions = await Transaction.findAll();
  return res.status(200).json({ transactions });
}

export async function postTransactions(req: Request, res: Response) {
  const { type, amount, date, description, categoryId } = req.body;
  try {
    await checkTransaction(type, amount, date, description, categoryId);
    const decoded = res.locals.decoded;

    await Transaction.create({
      type: type,
      amount: amount,
      date: date,
      description: description,
      categoryId: categoryId,
      userId: decoded.id,
    });
    return res.status(200).json({ message: "create income" });
  } catch (error) {
    return res.status(400).json(error);
  }
}
