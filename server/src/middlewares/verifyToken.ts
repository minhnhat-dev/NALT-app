import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";
import { connectRedis } from "../database/Redis";

export async function verifyTokenAcces(
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

    if (typeof decoded !== "object" || !decoded.jti)
      return res.status(401).json({ error: "Unauthorized!" });

    const redis = connectRedis.redis;
    const result = await redis.get(`jti:${decoded.jti}`);

    if (result !== null) {
      return res.status(401).json({ message: "Token has been revoked!" });
    }

    req.JwtDecodedData = {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role,
      jti: decoded.jti,
      iat: decoded.iat!,
      exp: decoded.exp!,
    };

    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}

export async function verifyTokenRefesh(
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
    if (typeof decoded !== "object" || !decoded.jti)
      return res.status(401).json({ error: "Unauthorized!" });

    const redis = connectRedis.redis;
    const result = await redis.get(`jti:${decoded.jti}`);

    if (result !== null) {
      return res.status(401).json({ message: "Token has been revoked!" });
    }

    req.jwtData = {
      id: decoded.id,
      name: decoded.name,
      email: decoded.email,
      role: decoded.role,
      jti: decoded.jti,
    };
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}
