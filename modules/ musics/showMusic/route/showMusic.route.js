const express = require("express");
const route = express.Router();
const showMusicController = require('../controller/showMusic.controller');

route.use("/showAll", showMusicController.showAllMusic);

module.exports = route;