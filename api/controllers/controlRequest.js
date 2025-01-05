const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config();

module.exports.controlRequest = async (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header("Referrer-Policy", "no-referrer-when-downgrade");

  const redirectUrl = "http://localhost:5000/oauth";

  const oAuth2Client = new OAuth2Client(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    redirectUrl
  );

  const authorizeUrl = await oAuth2Client.generateAuthUrl({
    access_type: "offline", //This is for testing
    scope: "https://www.googleapis.com/auth/userinfo.profile openid email", //Gives what we need
    prompt: "consent", // Tells the user to consent even if they are logged in
  });

  res.json({ url: authorizeUrl });
};
