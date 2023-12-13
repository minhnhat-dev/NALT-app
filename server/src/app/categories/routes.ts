import { Router } from "express";
import * as controllers from "./controllers";
import { verifyTokenAcces } from "../../middlewares/verifyToken";

const router = Router();

router.get("/", verifyTokenAcces, controllers.categories);
router.post("/", verifyTokenAcces, controllers.category);

export default router;
