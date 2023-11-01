import { Request, Response, NextFunction } from "express";
import User from "./models";

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const users = await User.findAll();
  return res.status(200).json(users);
}
