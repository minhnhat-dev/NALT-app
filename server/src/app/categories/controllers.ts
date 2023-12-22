import { Request, Response } from "express";
import { getStorage } from "firebase-admin/storage";
import { Category } from "./models";
import { validateCategory } from "../../validators/validateCategory";

export async function categories(req: Request, res: Response) {
  const categories = await Category.findAll({
    where: { userId: req.JwtDecodedData.id },
  });
  return res.status(200).json({ categories });
}

export async function category(req: Request, res: Response) {
  const { name, type } = req.body;
  let image = null;
  const bucket = getStorage().bucket();

  try {
    const category = await validateCategory(name, type);
    if (req.file) {
      const file = bucket.file(`categories/${req.file.originalname}`);

      await file.save(req.file.buffer, {
        metadata: {
          contentType: req.file.mimetype,
        },
      });

      const [url] = await file.getSignedUrl({
        action: "read",
        expires: Date.now() + 1000 * 60 * 60 * 24 * 365,
      });

      image = url;
    }

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
