import { Request, Response, NextFunction } from "express";
import User from "../models/User";

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const users = await User.findAll();
  return res.status(200).json(users);
}

export async function register(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const user = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  return res.status(201).json(user);
}
