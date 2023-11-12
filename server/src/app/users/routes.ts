import { Router } from "express";
import { getUsers } from "./controllers";
import verifyToken from "../../middlewares/verifyToken";

const router = Router();

router.get("/", verifyToken, getUsers);

export default router;
