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
    const decoded = jwt.verify(token, env.refeshKey);

    const redis = connectRedis.redis;
    const result = await redis.get(`token:${token}`);

    if (result === "revoked") {
      return res.status(401).json({ message: "Token has been revoked!" });
    }

    res.locals.decoded = decoded;
    res.locals.token = token;
    res.locals.redis = connectRedis.redis;

    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}
