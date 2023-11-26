import { Router } from "express";
import * as controllers from "./controllers";
import revokedToken from "../../middlewares/revokedToken";
import verifyToken from "../../middlewares/verifyToken";

const router = Router();

router.get("/me", verifyToken, controllers.getMe);
router.post("/signup", controllers.postSignup);
router.post("/signin", controllers.postSignin);
router.post("/refresh", revokedToken, controllers.postRefresh);
router.post("/signout", revokedToken, controllers.postSignout);

export default router;
