import express, { Request, Response, NextFunction } from "express";
import path from "path";
import "dotenv/config";
import usersRoutes from "./routes/users-routes";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRoutes);

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(404).json({ error: "Could not find this route." });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
