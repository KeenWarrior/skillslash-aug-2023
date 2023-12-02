const tokenTypes = require("../constants/tokenTypes");
const User = require("../models/user.model");
const { createToken } = require("./token.service");
const emailService = require("./email.service");

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
  const accessToken = await createToken(user, tokenTypes.ACCESS);
  const refreshToken = await createToken(user, tokenTypes.REFRESH);
  return {
    userInfo: user,
    tokens: {
      access: accessToken,
      refresh: refreshToken,
    },
  };
}

async function sendEmailVerification(user) {
  if (user.emailVerified) {
    throw new Error("Email already verified");
  }

  const token = await createToken(user, tokenTypes.VERIFY_EMAIL);
  emailService.sendVerificationEmail(user.name, user.email, token);
  return {
    message: "Verification email sent",
  };
}

async function verifyEmail(userId) {
  const response = User.findByIdAndUpdate(
    userId,
    { emailVerified: true },
    {
      new: true,
    }
  );
  if (!response) throw new Error("User not found");
  return response;
}

async function logout() {}

module.exports = {
  register,
  login,
  logout,
  sendEmailVerification,
  verifyEmail,
};
