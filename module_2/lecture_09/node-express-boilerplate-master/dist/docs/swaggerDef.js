"use strict";

var _require = require('../../package.json'),
  version = _require.version;
var config = require('../config/config');
var swaggerDef = {
  openapi: '3.0.0',
  info: {
    title: 'node-express-boilerplate API documentation',
    version: version,
    license: {
      name: 'MIT',
      url: 'https://github.com/hagopj13/node-express-boilerplate/blob/master/LICENSE'
    }
  },
  servers: [{
    url: "http://localhost:".concat(config.port, "/v1")
  }]
};
module.exports = swaggerDef;