import { Request, Response } from "express";
import { User } from "./models";

// User.sync({force: true})

export async function getUsers(req: Request, res: Response) {
  const users = await User.findAll({ attributes: { exclude: ["password"] } });
  return res.status(200).json({ users });
}
