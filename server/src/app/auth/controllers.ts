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

  const payload = {
    id: user.dataValues.id,
    username: user.dataValues.username,
  };

  const tokenAccess = jwt.sign(payload, env.accesKey, {
    expiresIn: "1p",
  });
  const tokenRefresh = jwt.sign(payload, env.refeshKey, {
    expiresIn: "60p",
  });

  res.cookie("tokenAccess", tokenAccess, { maxAge: 60 * 1000, httpOnly: true });
  res.cookie("tokenRefresh", tokenRefresh, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  });

  return res.status(201).json(user);
}

export async function login(req: Request, res: Response) {
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

  const tokenAccess = jwt.sign(payload, env.accesKey, {
    expiresIn: "1p",
  });
  const tokenRefresh = jwt.sign(payload, env.refeshKey, {
    expiresIn: "60p",
  });

  res.cookie("tokenAccess", tokenAccess, { maxAge: 60 * 1000, httpOnly: true });
  res.cookie("tokenRefresh", tokenRefresh, {
    maxAge: 60 * 60 * 1000,
    httpOnly: true,
  });

  return res.status(200).json({ access: tokenAccess, refresh: tokenRefresh });
}
