"use strict";

var express = require("express");
var cors = require("cors");
var app = express();
app.use(express.json());
app.use(cors());
module.exports = app;