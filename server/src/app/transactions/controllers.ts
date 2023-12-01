import { Request, Response } from "express";
import { Transaction, Category } from "./models";
import checkTransaction from "../../validators/checkTransaction";

// Transaction.sync({force: true})
// Category.sync({force: true})

export async function getTransactions(req: Request, res: Response) {
  const transactions = await Transaction.findAll();
  return res.status(200).json({ transactions });
}

export async function postIncome(req: Request, res: Response) {
  const { amount, categoryId, date, description } = req.body;
  try {
    await checkTransaction(amount, categoryId, date, description);
    const decoded = res.locals.decoded;

    await Transaction.create({
      type: "income",
      amount: amount,
      category: categoryId,
      date: date,
      description: description,
      userId: decoded.id,
    });
    return res.status(200).json({ message: "create transation" });
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function postExpense(req: Request, res: Response) {
  const { amount, category, date, description } = req.body;
  try {
    await checkTransaction(amount, category, date, description);
    const decoded = res.locals.decoded;

    await Transaction.create({
      type: "expense",
      amount: amount,
      category: category,
      date: date,
      description: description,
      userId: decoded.id,
    });
    return res.status(200).json({ message: "create transation" });
  } catch (error) {
    return res.status(400).json(error);
  }
}
