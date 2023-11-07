import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import env from "../config/env";

export async function verify(req: Request, res: Response, next: NextFunction) {
  if (!req.headers.authorization) {
    return res.status(403).json({ message: "Token not found!" });
  }

  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, env.accesKey);
    next();
  } catch (error) {
    return res.status(401).json(error);
  }
}
