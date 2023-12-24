"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _helmet = _interopRequireDefault(require("helmet"));
var _xssClean = _interopRequireDefault(require("xss-clean"));
var _expressMongoSanitize = _interopRequireDefault(require("express-mongo-sanitize"));
var _compression = _interopRequireDefault(require("compression"));
var _cors = _interopRequireDefault(require("cors"));
var _passport = _interopRequireDefault(require("passport"));
var _httpStatus = _interopRequireDefault(require("http-status"));
var _config = _interopRequireDefault(require("./config/config"));
var _morgan = _interopRequireDefault(require("./config/morgan"));
var _passport2 = require("./config/passport");
var _rateLimiter = require("./middlewares/rateLimiter");
var _v = _interopRequireDefault(require("./routes/v1"));
var _error = require("./middlewares/error");
var _ApiError = _interopRequireDefault(require("./utils/ApiError"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var app = (0, _express["default"])();
if (_config["default"].env !== 'test') {
  app.use(_morgan["default"].successHandler);
  app.use(_morgan["default"].errorHandler);
}

// set security HTTP headers
app.use((0, _helmet["default"])());

// parse json request body
app.use(_express["default"].json());

// parse urlencoded request body
app.use(_express["default"].urlencoded({
  extended: true
}));

// sanitize request data
app.use((0, _xssClean["default"])());
app.use((0, _expressMongoSanitize["default"])());

// gzip compression
app.use((0, _compression["default"])());

// enable cors
app.use((0, _cors["default"])());
app.options('*', (0, _cors["default"])());

// jwt authentication
app.use(_passport["default"].initialize());
_passport["default"].use('jwt', _passport2.jwtStrategy);

// limit repeated failed requests to auth endpoints
if (_config["default"].env === 'production') {
  app.use('/v1/auth', _rateLimiter.authLimiter);
}

// v1 api routes
app.use('/v1', _v["default"]);

// send back a 404 error for any unknown api request
app.use(function (req, res, next) {
  next(new _ApiError["default"](_httpStatus["default"].NOT_FOUND, 'Not found'));
});

// convert error to ApiError, if needed
app.use(_error.errorConverter);

// handle error
app.use(_error.errorHandler);
var _default = exports["default"] = app;