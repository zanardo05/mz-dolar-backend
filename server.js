import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

  res.send("MZ Dólar Backend Online");

});

app.get("/auth/login", (req, res) => {

  res.redirect(
    "https://app.deriv.com"
  );

});

app.listen(process.env.PORT || 3000, () => {

  console.log("Servidor online");

});
