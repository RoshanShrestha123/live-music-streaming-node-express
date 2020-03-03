const showMusicModel = require('../model/showMusic.model');
showAllMusic = (req,res) => {
  showMusicModel.selectAllMusic((error,result)=>{
    res.send({result})
  })
}
module.exports = {
  showAllMusic
}