import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import constants from "./constants";
import User from "../users/models";
import env from "../../config/env";
import checkUser from "../../validators/checkUser";
import { v4 } from "uuid";

export async function getMe(req: Request, res: Response) {
  const decoded = res.locals.decoded;

  const user = {
    id: decoded.id,
    email: decoded.email,
    name: decoded.name,
  };

  return res.status(200).json({
    user: user,
  });
}

export async function postSignup(req: Request, res: Response) {
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

export async function postSignin(req: Request, res: Response) {
  const { email, password } = req.body;
  try {
    await checkUser(email, password);
  } catch (errors: any) {
    return res.status(400).json(
      errors.map((error: any) => ({
        [error.property]: Object.values(error.constraints).join(", "),
      }))
    );
  }

  const user = await User.findOne({ where: { email: email } });
  if (!user) {
    return res.status(401).json({ error: "Not found user!" });
  }

  const isCompare = bcrypt.compareSync(password, user.dataValues.password);
  if (!isCompare) {
    return res.status(401).json({ error: "Password incorrect!" });
  }

  const payload = {
    id: user.dataValues.id,
    email: user.dataValues.email,
    name: user.dataValues.name,
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
}

export async function postRefresh(req: Request, res: Response) {
  const decoded = res.locals.decoded;

  const payload = {
    id: decoded.id,
    email: decoded.email,
    name: decoded.name,
    jti: decoded.jti,
  };

  const tokenAccess = jwt.sign(payload, env.accesKey, {
    expiresIn: "1 days",
  });

  return res.status(200).json({
    access: tokenAccess,
  });
}

export async function postSignout(req: Request, res: Response) {
  const redis = res.locals.redis;
  const decoded = res.locals.decoded;
  const jti = res.locals.jti;

  redis.set(`jti:${jti}`, decoded.exp * 1000);

  return res.status(200).json({
    message: "Logout success!",
  });
}
