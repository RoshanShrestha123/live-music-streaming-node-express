const uploadModel = require('../model/upload.model');

uploadMusic = (req, res) => {
  let pathName = req.file.filename;
  let originalName = req.file.originalname;
  uploadModel.insertMusic(pathName,originalName,(error,result)=>{
    res.send({ mesg: "Music uploaded successfully" });

  });
};
module.exports = {
  uploadMusic
};
