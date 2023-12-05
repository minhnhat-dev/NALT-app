import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import constants from "./constants";
import User from "../users/models";
import env from "../../config/env";
import { validateUser } from "../../validators/validateUser";
import { v4 } from "uuid";
import { JwtData } from "../../type/jwt.interface";
import { connectRedis } from "../../database/Redis";

export async function me(req: Request, res: Response) {
  const user = {
    id: req.JwtDecodedData.id,
    name: req.JwtDecodedData.name,
    email: req.JwtDecodedData.email,
  };
  return res.status(200).json({
    user: user,
  });
}

export async function signup(req: Request, res: Response) {
  const { name, email, password } = req.body;

  try {
    const user = await validateUser(email, password, name);
    const hash = bcrypt.hashSync(password, constants.SALT_ROUNDS);

    await User.create({
      name: user.name,
      email: user.email,
      password: hash,
    });

    return res.status(201).json({ message: "Signup successful" });
  } catch (errors: any) {
    return errors.name
      ? res
          .status(400)
          .json(
            errors.errors.map((item: any) => ({ [item.path]: item.message }))
          )
      : res.status(400).json(
          errors.map((error: any) => ({
            [error.property]: Object.values(error.constraints).join(", "),
          }))
        );
  }
}

export async function signin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    const user = await validateUser(email, password);
    const userDb = await User.findOne({ where: { email: user.email } });
    if (!userDb) {
      return res.status(401).json({ error: "Password or Email invalid" });
    }

    const isCompare = bcrypt.compareSync(password, userDb.dataValues.password);
    if (!isCompare) {
      return res.status(401).json({ error: "Password or Email invalid" });
    }

    const payload: JwtData = {
      id: userDb.dataValues.id,
      email: userDb.dataValues.email,
      name: userDb.dataValues.name,
      jti: v4(),
    };

    const tokenAccess = jwt.sign(payload, env.accesKey, {
      expiresIn: "1 days",
    });
    const tokenRefresh = jwt.sign(payload, env.refeshKey, {
      expiresIn: "7 days",
    });

    return res.status(200).json({
      access: tokenAccess,
      refresh: tokenRefresh,
    });
  } catch (errors: any) {
    return res.status(400).json(
      errors.map((error: any) => ({
        [error.property]: Object.values(error.constraints).join(", "),
      }))
    );
  }
}

export async function refresh(req: Request, res: Response) {
  const payload = {
    ...req.jwtData,
  };

  const tokenAccess = jwt.sign(payload, env.accesKey, {
    expiresIn: "1 days",
  });

  return res.status(200).json({
    access: tokenAccess,
  });
}

export async function signout(req: Request, res: Response) {
  const redis = connectRedis.redis;

  redis.set(`jti:${req.JwtDecodedData.jti}`, req.JwtDecodedData.exp * 1000);

  return res.status(200).json({
    message: "Logout success!",
  });
}
