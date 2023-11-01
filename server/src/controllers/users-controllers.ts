import { Request, Response, NextFunction } from "express";
import User from "../models/User";
import bcrypt from "bcrypt";

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
  const saltRounds = 10;
  const hash = bcrypt.hashSync(req.body.password, saltRounds);

  const user = await User.create({
    username: req.body.username,
    password: hash,
  });

  return res.status(201).json(user);
}

export async function login(req: Request, res: Response, next: NextFunction) {
  const user = await User.findOne({ where: { username: req.body.username } });

  if (!user) {
    return res.status(404).json({ errors: "Not found user!" });
  }

  return bcrypt.compareSync(req.body.password, user.dataValues.password)
    ? res.status(200).json({ login: "Login success" })
    : res.status(401).json({ login: "Login failed" });
}
