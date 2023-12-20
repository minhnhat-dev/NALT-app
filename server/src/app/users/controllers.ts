import { Request, Response } from "express";
import { User } from "./models";

export async function users(req: Request, res: Response) {
  const users =
    req.JwtDecodedData.role === "admin"
      ? await User.findAll()
      : req.JwtDecodedData.role === "guest"
      ? await User.findAll({ where: { id: req.JwtDecodedData.id } })
      : {};
  return res.status(200).json({ users });
}
