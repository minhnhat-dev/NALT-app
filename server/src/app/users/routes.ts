import { Router } from "express";
import { getUsers } from "./controllers";
import { verify } from "../../middleware/token";

const router = Router();

router.get("/", verify, getUsers);

export default router;
