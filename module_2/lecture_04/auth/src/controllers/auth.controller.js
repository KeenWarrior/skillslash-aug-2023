const authService = require("../services/auth.service");

async function register(req, res) {
  const response = await authService.register(req.body);
  res.json(response);
}

async function login(req, res) {
  res.send("login");
}

async function logout(req, res) {
  res.send("logout");
}

module.exports = {
  register,
  login,
  logout,
};
