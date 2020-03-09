const uploadModel = require('../model/upload.model');
const pathHandler = require ('../../../util/pathName');

uploadMusic = (req, res) => {
  console.log(req)
  let musicPath = pathHandler.pathName(req.file.filename);
  console.log(musicPath)
  
  let originalName = req.file.originalname;
  uploadModel.insertMusic(musicPath,originalName,(error,result)=>{
    res.send({ mesg: "Music uploaded successfully",
    file:req.file,
    body:req.body
   });

  });
};
module.exports = {
  uploadMusic
};
