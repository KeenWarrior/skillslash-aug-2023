"use strict";

var Joi = require('joi');
var _require = require('./custom.validation'),
  password = _require.password,
  objectId = _require.objectId;
var createUser = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('user', 'admin')
  })
};
var getUsers = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer()
  })
};
var getUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId)
  })
};
var updateUser = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId)
  }),
  body: Joi.object().keys({
    email: Joi.string().email(),
    password: Joi.string().custom(password),
    name: Joi.string()
  }).min(1)
};
var deleteUser = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId)
  })
};
module.exports = {
  createUser: createUser,
  getUsers: getUsers,
  getUser: getUser,
  updateUser: updateUser,
  deleteUser: deleteUser
};