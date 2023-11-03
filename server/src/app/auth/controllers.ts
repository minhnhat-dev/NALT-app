import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../../config/env";
import User from "../users/models";

export async function register(req: Request, res: Response) {
  const saltRounds = 10;
  const hash = bcrypt.hashSync(req.body.password, saltRounds);

  const user = await User.create({
    username: req.body.username,
    password: hash,
  });

  return res.status(201).json(user);
}

export async function login(req: Request, res: Response) {
  const user = await User.findOne({ where: { username: req.body.username } });

  if (!user) {
    return res.status(404).json({ message: "Not found user!" });
  }

  const isCompare = bcrypt.compareSync(
    req.body.password,
    user.dataValues.password
  );

  if (!isCompare) {
    return res.status(401).json({ message: "Login failed!" });
  }

  const payload = {
    id: user.dataValues.id,
    username: user.dataValues.username,
  };

  const tokenAccess = jwt.sign(payload, env.accesKey, {
    expiresIn: "14 days",
  });

  const tokenRefresh = jwt.sign(payload, env.refeshKey, {
    expiresIn: "30 days",
  });

  return res.status(200).json({
    access: tokenAccess,
    refresh: tokenRefresh,
  });
}
