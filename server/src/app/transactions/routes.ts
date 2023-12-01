import { Router } from "express";
import * as controllers from "./controllers";
import { accesToken } from "../../middlewares/accesToken";

const router = Router();

router.get("/", controllers.getTransactions);
router.post("/income", accesToken, controllers.postIncome);
router.post("/expense", accesToken, controllers.postExpense);

export default router;
