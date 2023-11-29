import { Request, Response } from "express";
import Transaction from "./models";

export async function getTransactions(req: Request, res: Response) {
  const transactions = await Transaction.findAll();
  return res.status(200).json({ transactions });
}
