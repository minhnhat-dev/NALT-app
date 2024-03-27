import { Router } from "express";
import * as controllers from "./controllers";
import {
  verifyTokenAcces,
  verifyTokenRefesh,
} from "../../middlewares/verifyToken";
import multer from "multer";

const router = Router();
const upload = multer();

router.get("/me", verifyTokenAcces, controllers.me);
router.post("/signup", upload.single("image"), controllers.signup);
router.post("/signin", controllers.signin);
router.post("/refresh", verifyTokenRefesh, controllers.refresh);
router.post("/signout", verifyTokenAcces, controllers.signout);

export default router;
