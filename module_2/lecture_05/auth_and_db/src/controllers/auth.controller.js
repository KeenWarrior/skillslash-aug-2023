const authService = require("../services/auth.service");
const bcrypt = require("bcrypt");

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

module.exports = {
  register,
  login,
  logout,
};
