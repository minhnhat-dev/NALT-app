import express, { Request, Response } from "express";
import path from "path";
import "dotenv/config";
import env from "./config/env";
import cors from "cors";
import { checkEnv } from "./validation/env";

import users from "./app/users/routes";
import auth from "./app/auth/routes";

checkEnv();

const app = express();

app.use(cors({
  origin: "http://localhost:3000"
}));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", users);
app.use("/api/auth", auth);

app.use((req: Request, res: Response) => {
  return res.status(404).json({ message: "Could not find this route." });
});

app.listen(env.port, () => {
  console.log(`Server running at http://localhost:${env.port}`);
});
