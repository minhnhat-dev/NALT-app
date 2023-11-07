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
    return res.status(403).json({ message: "Token not found!" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, env.refeshKey);
    if (typeof decoded === "string") {
      return res.status(400).json({ message: "Unable to decode token!" });
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
