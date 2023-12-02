const jwt = require("jsonwebtoken");
const config = require("../config/config");

function auth(req, res, next) {
  if (req.headers.authorization) {
    const [type, token] = req.headers.authorization.split(" ");
    if (type && type === "Bearer" && token) {
      try {
        const user = jwt.verify(token, config.jwt.secret);
        if (user) {
          req.user = user;
          next();
        }
      } catch (error) {
        res.status(401).send({ message: "Unauthorized" });
      }
    }
  }
  res.status(401).send({ message: "Unauthorized" });
}

module.exports = auth;
