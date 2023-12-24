"use strict";

var winston = require('winston');
var config = require('./config');
var enumerateErrorFormat = winston.format(function (info) {
  if (info instanceof Error) {
    Object.assign(info, {
      message: info.stack
    });
  }
  return info;
});
var logger = winston.createLogger({
  level: config.env === 'development' ? 'debug' : 'info',
  format: winston.format.combine(enumerateErrorFormat(), config.env === 'development' ? winston.format.colorize() : winston.format.uncolorize(), winston.format.splat(), winston.format.printf(function (_ref) {
    var level = _ref.level,
      message = _ref.message;
    return "".concat(level, ": ").concat(message);
  })),
  transports: [new winston.transports.Console({
    stderrLevels: ['error']
  })]
});
module.exports = logger;