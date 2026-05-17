import express from "express";

const router = express.Router();

router.get("/login", async (req, res) => {

  const appId =
    process.env.DERIV_APP_ID;

  const redirect =
    encodeURIComponent(
      "https://mz-dolar-backend.onrender.com/auth/callback"
    );

  const url =
    `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&redirect_uri=${redirect}`;

  res.redirect(url);

});

// CALLBACK DERIV
router.get("/callback", async (req, res) => {

  console.log(req.query);

  const token =
    req.query.token1;

  if (!token) {

    return res.send(
      "Token não encontrado"
    );

  }

  // volta para frontend
  res.redirect(
    `${process.env.FRONTEND_URL}/#/dashboard?token=${token}`
  );

});

export default router;
