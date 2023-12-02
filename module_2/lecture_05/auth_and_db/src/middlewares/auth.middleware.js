const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/user.model");

async function auth(req, res, next) {
  if (req.headers.authorization) {
    const [type, token] = req.headers.authorization.split(" ");
    if (type && type === "Bearer" && token) {
      try {
        const jwtUser = jwt.verify(token, config.jwt.secret);
        if (jwtUser) {
          const user = await User.findById(jwtUser.sub);
          req.user = user;
          return next();
        }
      } catch (error) {
        res.status(401).send({ message: "Unauthorized" });
      }
    }
  }
  res.status(401).send({ message: "Unauthorized" });
}

module.exports = auth;
