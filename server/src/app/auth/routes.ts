import { Router } from "express";
import * as controllers from "./controllers";

const router = Router();

router.post("/signup", controllers.signup);
router.post("/signin", controllers.signin);
router.post("/refresh", controllers.refresh);

export default router;
