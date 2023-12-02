const User = require("../models/user.model");


async function register(userInfo) {
  const user = new User(userInfo);
  const saved = await user.save();
  return saved;
}

async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isMatch = await user.comparePassword(password);
  if (!isMatch) throw new Error("Wrong password");
  return user;
}

async function logout() {

}

module.exports = {
  register,
  login,
  logout,
};

