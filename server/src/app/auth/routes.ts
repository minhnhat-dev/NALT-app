import { Router } from "express";
import multer from "multer";
import { register, login } from "./controllers";

const upload = multer();
const router = Router();

router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);

export default router;
