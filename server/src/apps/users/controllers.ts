import { Request, Response, NextFunction } from "express";
import User from "./models";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

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

  const isComparePassword = bcrypt.compareSync(
    req.body.password,
    user.dataValues.password
  );

  if (!isComparePassword) {
    return res.status(401).json({ login: "Login failed" });
  }

  const payload = {
    id: user.dataValues.id,
    username: user.dataValues.username,
  };

  const tokenAccess = jwt.sign(payload, process.env.ACCESS_KEY as string);
  const tokenRefresh = jwt.sign(payload, process.env.REFRESH_KEY as string);

  return res.status(200).json({ access: tokenAccess, refresh: tokenRefresh });
}
