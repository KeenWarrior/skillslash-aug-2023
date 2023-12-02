const authService = require("../services/auth.service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { VERIFY_EMAIL } = require("../constants/tokenTypes");
const config = require("../config/config");

async function register(req, res) {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;
    const response = await authService.register(req.body);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}

async function login(req, res) {
  try {
    const response = await authService.login(req.body.email, req.body.password);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}

async function logout(req, res) {
  res.send("logout");
}

async function sendEmailVerification(req, res) {
  const response = await authService.sendEmailVerification(req.user);
  res.json(response);
}

async function verifyEmail(req, res) {
  const token = req.params.token;
  try {
    const decoded = jwt.verify(token, config.jwt.secret);
    if (
      !decoded ||
      !decoded.sub ||
      !decoded.type ||
      decoded.type !== VERIFY_EMAIL
    ) {
      throw new Error("Invalid token");
    }
    const response = await authService.verifyEmail(decoded.sub);
    res.json(response);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
}

module.exports = {
  register,
  login,
  logout,
  sendEmailVerification,
  verifyEmail
};
