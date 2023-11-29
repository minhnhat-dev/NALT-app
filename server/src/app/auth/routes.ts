import { Router } from "express";
import * as controllers from "./controllers";
import accesToken from "../../middlewares/accesToken";
import refreshToken from "../../middlewares/refreshToken";

const router = Router();

router.get("/me", accesToken, controllers.getMe);
router.post("/signup", controllers.postSignup);
router.post("/signin", controllers.postSignin);
router.post("/refresh", refreshToken, controllers.postRefresh);
router.post("/signout", accesToken, controllers.postSignout);

export default router;
