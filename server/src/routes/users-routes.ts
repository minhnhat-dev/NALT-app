import { Router } from "express";
import multer from "multer";
import { register, login, getUsers } from "../controllers/users-controllers";

const upload = multer();
const router = Router();

router.get("/", getUsers);
router.post("/register", upload.none(), register);
router.post("/login", upload.none(), login);
export default router;
