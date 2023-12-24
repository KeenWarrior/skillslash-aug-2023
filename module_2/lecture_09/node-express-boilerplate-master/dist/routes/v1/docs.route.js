"use strict";

var express = require('express');
var swaggerJsdoc = require('swagger-jsdoc');
var swaggerUi = require('swagger-ui-express');
var swaggerDefinition = require('../../docs/swaggerDef');
var router = express.Router();
var specs = swaggerJsdoc({
  swaggerDefinition: swaggerDefinition,
  apis: ['src/docs/*.yml', 'src/routes/v1/*.js']
});
router.use('/', swaggerUi.serve);
router.get('/', swaggerUi.setup(specs, {
  explorer: true
}));
module.exports = router;