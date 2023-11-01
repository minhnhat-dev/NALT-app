import { Router } from "express";
import { getUsers } from "./controllers";

const router = Router();

router.get("/", getUsers);

export default router;
