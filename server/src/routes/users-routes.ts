import { Router } from "express";
import multer from "multer";
import { register, getUsers } from "../controllers/users-controllers";

const upload = multer();
const router = Router();

router.get("/", getUsers);
router.post("/register", upload.none(), register);

export default router;
