import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../../config/env";
import User from "../users/models";

export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body;

  if (!email || !password) {
    return res.status(409).json({ error: "Email and password not empty!" });
  }

  try {
    const saltRounds = 10;
    const hash = bcrypt.hashSync(password, saltRounds);

    const user = await User.create({
      name: name,
      email: email,
      password: hash,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json(error);
  }
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(409).json({ error: "Email and password not empty!" });
  }

  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.status(404).json({ error: "Not found user!" });
  }

  const isCompare = bcrypt.compareSync(password, user.dataValues.password);

  if (!isCompare) {
    return res.status(401).json({ error: "Login failed!" });
  }

  const payload = {
    id: user.dataValues.id,
    email: user.dataValues.email,
  };

  const tokenAccess = jwt.sign(payload, env.accesKey, {
    expiresIn: 60 * 60,
  });

  const tokenRefresh = jwt.sign(payload, env.refeshKey, {
    expiresIn: "15 days",
  });

  return res.status(200).json({
    access: tokenAccess,
    refresh: tokenRefresh,
  });
}

export async function refresh(req: Request, res: Response) {
  if (!req.headers.authorization) {
    return res.status(403).json({ error: "Token not found!" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, env.refeshKey);
    if (typeof decoded === "string") {
      return res.status(400).json({ error: "Unable to decode token!" });
    }

    const payload = {
      id: decoded.id,
      username: decoded.username,
    };

    const tokenAccess = jwt.sign(payload, env.accesKey, {
      expiresIn: 60 * 60,
    });

    return res.status(200).json({
      access: tokenAccess,
    });
  } catch (error) {
    return res.status(401).json(error);
  }
}
