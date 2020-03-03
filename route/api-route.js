const express = require("express");
const route = express.Router();
const authRoute = require("../modules/auth/route/auth.route");
const uploadRoute = require("../modules/ musics/upload/route/upload.route");
const downloadRoute = require("../modules/ musics/download/route/download.route");
const showMusicRoute = require("../modules/ musics/showMusic/route/showMusic.route");

route.use("/auth", authRoute);
route.use("/upload", uploadRoute);
route.use("/download", downloadRoute);
route.use("/music",showMusicRoute);

module.exports = route;
