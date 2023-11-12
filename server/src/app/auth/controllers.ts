import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import constants from "./constants";
import User from "../users/models";
import env from "../../config/env";
import checkUser from "../../validators/checkUser";

export async function me(req: Request, res: Response) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized!" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, env.accesKey) as jwt.JwtPayload;

    const user = {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
    };

    return res.status(200).json({
      user: user,
    });
  } catch (error) {
    return res.status(401).json(error);
  }
}

export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body;
  try {
    await checkUser(email, password, name);
    const hash = bcrypt.hashSync(password, constants.SALT_ROUNDS);

    await User.create({
      name: name,
      email: email,
      password: hash,
    });

    return res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    await checkUser(email, password);
  } catch (error) {
    return res.status(400).json(error);
  }

  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.status(404).json({ error: "Not found user!" });
  }

  const isCompare = bcrypt.compareSync(password, user.dataValues.password);

  if (!isCompare) {
    return res.status(401).json({ error: "Password incorrect!" });
  }

  const payload = {
    id: user.dataValues.id,
    email: user.dataValues.email,
    name: user.dataValues.name,
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
    return res.status(401).json({ error: "Unauthorized!" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, env.refeshKey) as jwt.JwtPayload;

    const payload = {
      id: decoded.id,
      email: decoded.email,
      name: decoded.name,
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
