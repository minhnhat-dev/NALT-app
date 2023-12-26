import { Router } from "express";
import multer from 'multer';
import * as controllers from "./controllers";
import { verifyTokenAcces } from "../../middlewares/verifyToken";

const router = Router();
const upload = multer();

router.get("/", verifyTokenAcces, controllers.categories);
router.post("/", verifyTokenAcces, upload.single("image"), controllers.category);

export default router;
