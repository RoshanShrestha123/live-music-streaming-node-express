const express = require("express");
const route = express.Router();
const AuthController = require('../controller/auth.controller');

route.post("/login", AuthController.userLogin);

route.post("/signup", AuthController.userSignup);

module.exports = route;