const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Token = require("../models/token.model");

async function createToken(user, typeOfToken) {
  const payload = {
    sub: user.id,
    name: user.name,
    email: user.email,
    type: typeOfToken,
  };

  console.log(payload)
  const token = jwt.sign(payload, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });

  const tokenDoc = new Token({
    token,
    userId: user.id,
    type: typeOfToken,
    expires: new Date(Date.now() + config.jwt.expiration * 1000),
  });

  await tokenDoc.save();

  return token;
}

module.exports = {
  createToken,
};
