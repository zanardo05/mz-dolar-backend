import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import derivRoutes from "./routes/deriv.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", derivRoutes);

app.get("/", (req, res) => {

  res.send(
    "MZ Dólar Backend Online"
  );

});

app.listen(process.env.PORT || 3000, () => {

  console.log(
    "Servidor online"
  );

});
