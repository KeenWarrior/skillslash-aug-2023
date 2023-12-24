"use strict";

var express = require('express');
var authRoute = require('./auth.route');
var userRoute = require('./user.route');
var docsRoute = require('./docs.route');
var config = require('../../config/config');
var router = express.Router();
var defaultRoutes = [{
  path: '/auth',
  route: authRoute
}, {
  path: '/users',
  route: userRoute
}];
var devRoutes = [
// routes available only in development mode
{
  path: '/docs',
  route: docsRoute
}];
defaultRoutes.forEach(function (route) {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach(function (route) {
    router.use(route.path, route.route);
  });
}
module.exports = router;