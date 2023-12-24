"use strict";

var mongoose = require('mongoose');
var _require = require('./plugins'),
  toJSON = _require.toJSON;
var _require2 = require('../config/tokens'),
  tokenTypes = _require2.tokenTypes;
var tokenSchema = mongoose.Schema({
  token: {
    type: String,
    required: true,
    index: true
  },
  user: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'User',
    required: true
  },
  type: {
    type: String,
    "enum": [tokenTypes.REFRESH, tokenTypes.RESET_PASSWORD, tokenTypes.VERIFY_EMAIL],
    required: true
  },
  expires: {
    type: Date,
    required: true
  },
  blacklisted: {
    type: Boolean,
    "default": false
  }
}, {
  timestamps: true
});

// add plugin that converts mongoose to json
tokenSchema.plugin(toJSON);

/**
 * @typedef Token
 */
var Token = mongoose.model('Token', tokenSchema);
module.exports = Token;