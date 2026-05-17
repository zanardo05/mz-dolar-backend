import express from "express";

const router = express.Router();

router.get("/login", async (req, res) => {

  const appId =
    process.env.DERIV_APP_ID;

  const redirect =
    encodeURIComponent(
      `${process.env.FRONTEND_URL}/#/dashboard`
    );

  const url =
    `https://oauth.deriv.com/oauth2/authorize?app_id=${appId}&l=PT&redirect_uri=${redirect}`;

  res.redirect(url);

});

export default router;
