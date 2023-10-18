import { Request, Response, NextFunction } from "express";

function getUsers(req: Request, res:Response, next:NextFunction) {
  return res.status(200).json({ users: "users" });
}

export default { getUsers };
