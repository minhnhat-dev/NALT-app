import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";

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
    jwt.verify(token, env.accesKey);
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}
