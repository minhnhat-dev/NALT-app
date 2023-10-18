import { Router } from "express";
import usersControllers from "../controllers/users-controllers";

const router = Router();

router.get("/", usersControllers.getUsers);

export default router;
