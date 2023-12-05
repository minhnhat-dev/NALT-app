import { Router } from "express";
import * as controllers from "./controllers";
import {
  verifyTokenAcces,
  verifyTokenRefesh,
} from "../../middlewares/verifyToken";

const router = Router();

router.get("/me", verifyTokenAcces, controllers.me);
router.post("/signup", controllers.signup);
router.post("/signin", controllers.signin);
router.post("/refresh", verifyTokenRefesh, controllers.refresh);
router.post("/signout", verifyTokenAcces, controllers.signout);

export default router;
