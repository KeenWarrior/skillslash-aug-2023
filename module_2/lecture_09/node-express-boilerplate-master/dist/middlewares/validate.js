"use strict";

var Joi = require('joi');
var httpStatus = require('http-status');
var pick = require('../utils/pick');
var ApiError = require('../utils/ApiError');
var validate = function validate(schema) {
  return function (req, res, next) {
    var validSchema = pick(schema, ['params', 'query', 'body']);
    var object = pick(req, Object.keys(validSchema));
    var _Joi$compile$prefs$va = Joi.compile(validSchema).prefs({
        errors: {
          label: 'key'
        },
        abortEarly: false
      }).validate(object),
      value = _Joi$compile$prefs$va.value,
      error = _Joi$compile$prefs$va.error;
    if (error) {
      var errorMessage = error.details.map(function (details) {
        return details.message;
      }).join(', ');
      return next(new ApiError(httpStatus.BAD_REQUEST, errorMessage));
    }
    Object.assign(req, value);
    return next();
  };
};
module.exports = validate;