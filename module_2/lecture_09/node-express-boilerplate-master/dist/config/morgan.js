"use strict";

var morgan = require('morgan');
var config = require('./config');
var logger = require('./logger');
morgan.token('message', function (req, res) {
  return res.locals.errorMessage || '';
});
var getIpFormat = function getIpFormat() {
  return config.env === 'production' ? ':remote-addr - ' : '';
};
var successResponseFormat = "".concat(getIpFormat(), ":method :url :status - :response-time ms");
var errorResponseFormat = "".concat(getIpFormat(), ":method :url :status - :response-time ms - message: :message");
var successHandler = morgan(successResponseFormat, {
  skip: function skip(req, res) {
    return res.statusCode >= 400;
  },
  stream: {
    write: function write(message) {
      return logger.info(message.trim());
    }
  }
});
var errorHandler = morgan(errorResponseFormat, {
  skip: function skip(req, res) {
    return res.statusCode < 400;
  },
  stream: {
    write: function write(message) {
      return logger.error(message.trim());
    }
  }
});
module.exports = {
  successHandler: successHandler,
  errorHandler: errorHandler
};