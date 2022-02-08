const config = require("config");
const jwt = require("jsonwebtoken");

const jwtSecret = config.get("jwtSecret");

module.exports = function (req, res, next) {
  // Get Token from Request Header
  const token = req.header("x-auth-token");

  // If Token is missing
  if (!token) {
    return res
      .status(401)
      .json({ msg: "Token not found. Authorization Denied!" });
  }

  // Verify and Decode Token
  try {
    const decodedToken = jwt.verify(token, jwtSecret);
    req.user = decodedToken.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token!" });
  }
};
