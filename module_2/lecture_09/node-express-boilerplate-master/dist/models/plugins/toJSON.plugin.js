"use strict";

/* eslint-disable no-param-reassign */

/**
 * A mongoose schema plugin which applies the following in the toJSON transform call:
 *  - removes __v, createdAt, updatedAt, and any path that has private: true
 *  - replaces _id with id
 */

var deleteAtPath = function deleteAtPath(obj, path, index) {
  if (index === path.length - 1) {
    delete obj[path[index]];
    return;
  }
  deleteAtPath(obj[path[index]], path, index + 1);
};
var toJSON = function toJSON(schema) {
  var _transform;
  if (schema.options.toJSON && schema.options.toJSON.transform) {
    _transform = schema.options.toJSON.transform;
  }
  schema.options.toJSON = Object.assign(schema.options.toJSON || {}, {
    transform: function transform(doc, ret, options) {
      Object.keys(schema.paths).forEach(function (path) {
        if (schema.paths[path].options && schema.paths[path].options["private"]) {
          deleteAtPath(ret, path.split('.'), 0);
        }
      });
      ret.id = ret._id.toString();
      delete ret._id;
      delete ret.__v;
      delete ret.createdAt;
      delete ret.updatedAt;
      if (_transform) {
        return _transform(doc, ret, options);
      }
    }
  });
};
module.exports = toJSON;