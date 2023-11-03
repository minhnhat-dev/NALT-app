import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";

export async function verify(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "Token not found!" });
  }

  const token = req.headers.authorization.split(" ")[1];

  try {
    const decoded = jwt.verify(token, env.accesKey);
    req.body.decoded = decoded;
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}
