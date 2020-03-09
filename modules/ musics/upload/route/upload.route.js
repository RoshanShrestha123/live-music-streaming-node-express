const express = require("express");
const multer = require('multer');
const uploadController = require('../controller/upload.controller');
const pathController = require('../../../util/pathName')
let newFileName = '';

const storage = multer.diskStorage({
    destination: function(req,file,callback){
        callback(null,'./uploads/')
    },
    filename:function(req,file,callback){
        newFileName = pathController.pathName(file.originalname);
        callback(null,newFileName);
    }
    
})
const upload = multer({storage:storage});
const route = express.Router();
route.post('/music',upload.single('file'),uploadController.uploadMusic);

module.exports = route;