import { Router } from "express";
import * as controllers from "./controllers";
import { verifyTokenAcces } from "../../middlewares/verifyToken";

const router = Router();

router.get("/", verifyTokenAcces, controllers.users);

export default router;
