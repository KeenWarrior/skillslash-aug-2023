"use strict";

var Joi = require('joi');
var _require = require('./custom.validation'),
  password = _require.password;
var register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required()
  })
};
var login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required()
  })
};
var logout = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required()
  })
};
var refreshTokens = {
  body: Joi.object().keys({
    refreshToken: Joi.string().required()
  })
};
var forgotPassword = {
  body: Joi.object().keys({
    email: Joi.string().email().required()
  })
};
var resetPassword = {
  query: Joi.object().keys({
    token: Joi.string().required()
  }),
  body: Joi.object().keys({
    password: Joi.string().required().custom(password)
  })
};
var verifyEmail = {
  query: Joi.object().keys({
    token: Joi.string().required()
  })
};
module.exports = {
  register: register,
  login: login,
  logout: logout,
  refreshTokens: refreshTokens,
  forgotPassword: forgotPassword,
  resetPassword: resetPassword,
  verifyEmail: verifyEmail
};