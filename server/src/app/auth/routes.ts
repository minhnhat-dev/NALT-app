import { Router } from "express";
import multer from "multer";
import * as controllers from "./controllers";

const upload = multer();
const router = Router();

router.post("/signup", upload.none(), controllers.signup);
router.post("/signin", upload.none(), controllers.signin);
router.post("/refresh", upload.none(), controllers.refresh);

export default router;
