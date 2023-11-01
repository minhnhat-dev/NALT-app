import express, { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import path from "path";
import "dotenv/config";
import users from "./app/users/routes";
import auth from './app/auth/routes';

const app = express();
const port = process.env.PORT || 5000;

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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
