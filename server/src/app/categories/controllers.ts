import { Request, Response } from "express";
import { Category } from "./models";
import { validateCategory } from "../../validators/validateCategory";
import { uploadImageByBuffer } from "../../utils/upload";
import { CategoryData } from "../../types/category.interface";

export async function categories(req: Request, res: Response) {
  const categories = await Category.findAll({
    where: { userId: req.JwtDecodedData.id },
  });
  return res.status(200).json({ categories });
}

export async function category(req: Request, res: Response) {
  const { name, type } = req.body;
  try {
    const category: CategoryData = await validateCategory(name, type);
    const image = req.file
      ? await uploadImageByBuffer(req.file, "categories")
      : null;

    await Category.create({
      name: category.name,
      type: category.type,
      userId: req.JwtDecodedData.id,
      image,
    });

    return res.status(201).json({ message: "Category create successful" });
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
