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
    const categoryValidate: CategoryData = await validateCategory(name, type);

    const categoryDb = await Category.create({
      name: categoryValidate.name,
      type: categoryValidate.type,
      userId: req.JwtDecodedData.id,
      image: null,
    });

    categoryDb.set({
      image: req.file && (await uploadImageByBuffer(req.file, "categories")),
    });

    await categoryDb.save();

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
