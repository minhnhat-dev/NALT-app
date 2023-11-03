import express, { Request, Response, NextFunction } from "express";
import path from "path";
import "dotenv/config";
import env from "./config/env"
import { checkEnv } from "./validation/env";

import users from "./app/users/routes";
import auth from "./app/auth/routes";

checkEnv();

const app = express();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", users);
app.use("/api/auth", auth);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Could not find this route." });
});

app.listen(env.port, () => {
  console.log(`Server running at http://localhost:${env.port}`);
});
