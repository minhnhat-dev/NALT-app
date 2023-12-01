import { Request, Response } from "express";
import { Category } from "./models";
import { checkCategory } from "../../validators/checkCategory";

// Transaction.sync({force: true})
// Category.sync({force: true})

export async function getCategores(req: Request, res: Response) {
  const categores = await Category.findAll();
  return res.status(200).json({ categores });
}

export async function postCategory(req: Request, res: Response) {
  const { name, type } = req.body;
  try {
    await checkCategory(name, type);
    await Category.create({
      name: name,
      type: type,
    });
    return res.status(200).json({ message: "create category" });
  } catch (error) {
    return res.status(400).json(error);
  }
}
