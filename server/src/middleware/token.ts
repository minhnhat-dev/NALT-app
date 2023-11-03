import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export async function verify(req: Request, res: Response, next: NextFunction) {
  // const decoded = jwt.verify(req.headers.authorization)
  console.log(req.headers);
  next();
}
