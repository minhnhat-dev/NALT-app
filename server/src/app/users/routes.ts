import { Router } from "express";
import { getUsers } from "./controllers";
import { verifyTokenAcces } from "../../middlewares/verifyToken";

const router = Router();

router.get("/", verifyTokenAcces, getUsers);

export default router;
