import express, { Request, Response } from "express";
import path from "path";
import "dotenv/config";
import env from "./config/env";
import cors from "cors";
import checkEnv from "./validators/checkEnv";
import users from "./app/users/routes";
import auth from "./app/auth/routes";
import transactions from "./app/transactions/routes";
import categories from "./app/categories/routes";
import { job } from "./tasks/clearTokenExpired";
import { rootPath, routerAdmin } from "./app/admin/routes";
import "./types";
import "./database/Firebase";

checkEnv();
job.start();

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

app.use(express.static(path.join(__dirname, "public")));
app.use(rootPath, routerAdmin);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/api/auth", auth);
app.use("/api/users", users);
app.use("/api/categories", categories);
app.use("/api/transactions", transactions);

app.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "Could not find this route." });
});

app.listen(env.port, () => {
  console.log(`Server running at http://localhost:${env.port}`);
});
