const jwt = require("jsonwebtoken");
const { OAuth2Client } = require("google-auth-library");
const dotenv = require("dotenv");
dotenv.config();
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

module.exports.authMiddleware = async (req, res, next) => {
  //splits the header with space as parameter, maps it to an array and then takes the string at 1st index
  try {
    if (req.cookies.jwt_token) {
      let token = req.cookies.jwt_token; // Get JWT token from header
      try {
        const userDecoded = jwt.verify(token, process.env.JWT_SECRET);
        req.User = userDecoded;
        return next();
      } catch (err) {
        console.log("Error in jwt verification", err);
        res.status(400).json({ message: "Error" });
      }
    } else if (req.cookies.id_token) {
      let token = req.cookies.id_token;
      try {
        console.log("Inside the google authorization route");
        const ticket = await client.verifyIdToken({
          idToken: token,
          audience: process.env.GOOGLE_CLIENT_ID, // Specify your client ID here
        });

        const payload = ticket.getPayload();
        // console.log(payload);
        req.User = payload; // Attach the Google user payload to the request
        return next();
      } catch (err) {
        console.log("Error in google verification", err);
        res.status(400).json({ message: "Error" });
      }
    }
  } catch (err) {
    console.log("Error in middleware", err);
    res.status(500).json({ message: "Error" });
  }
};
