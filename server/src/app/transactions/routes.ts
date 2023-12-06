import { Router } from "express";
import * as controllers from "./controllers";
import { verifyTokenAcces } from "../../middlewares/verifyToken";

const router = Router();

router.get("/", verifyTokenAcces, controllers.transactions);
router.post("/", verifyTokenAcces, controllers.transaction);

export default router;
