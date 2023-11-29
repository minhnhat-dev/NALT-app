import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";
import { connectRedis } from "../database/Redis";

export default async function (
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (!req.headers.authorization) {
    return res.status(401).json({ error: "Unauthorized!" });
  }

  try {
    const token = req.headers.authorization.replace("Bearer ", "");
    const decoded = jwt.verify(token, env.accesKey);
    const jti = typeof decoded === "object" && decoded.jti;
    const redis = connectRedis.redis;
    const result = await redis.get(`jti:${jti}`);

    if (result !== null) {
      return res.status(401).json({ message: "Token has been revoked!" });
    }

    res.locals.decoded = decoded;
    res.locals.redis = redis;
    res.locals.jti = jti;
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}