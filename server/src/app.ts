import express from "express";
import path from "path";
import "dotenv/config";

import usersRoutes from "./routes/users-routes";
import db from "./database/db";

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/users", usersRoutes);

app.listen(port, () => {
  db.connectDatabase();
  console.log(`Server running at http://localhost:${port}`);
});
