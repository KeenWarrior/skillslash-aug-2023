"use strict";

var allRoles = {
  user: [],
  admin: ['getUsers', 'manageUsers']
};
var roles = Object.keys(allRoles);
var roleRights = new Map(Object.entries(allRoles));
module.exports = {
  roles: roles,
  roleRights: roleRights
};