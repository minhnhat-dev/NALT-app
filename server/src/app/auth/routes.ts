import { Router } from "express";
import * as controllers from "./controllers";

const router = Router();

router.get("/me", controllers.getMe);
router.post("/signup", controllers.postSignup);
router.post("/signin", controllers.postSignin);
router.post("/refresh", controllers.postRefresh);
router.post("/signout", controllers.postSignout);

export default router;
