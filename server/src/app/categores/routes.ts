import { Router } from "express";
import * as controllers from "./controllers";
import { accesToken } from "../../middlewares/accesToken";

const router = Router();

router.get("/", accesToken, controllers.getCategores);
router.post("/", accesToken, controllers.postCategory);

export default router;
