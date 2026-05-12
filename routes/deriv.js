import express from "express";

const router = express.Router();

router.get("/login", async (req, res) => {

  res.redirect(
    "https://app.deriv.com"
  );

});

export default router;
