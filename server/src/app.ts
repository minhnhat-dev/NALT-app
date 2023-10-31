import express from "express";
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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
