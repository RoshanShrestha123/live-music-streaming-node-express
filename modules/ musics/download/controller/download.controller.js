const express = require("express");
const fs = require('fs');
const downloadModel = require("../model/download.model");

getMusicPath = (req,res)=>{
  const id = req.params.id;
  console.log("id=",id)
  downloadModel.selectMusic(id,(error,result)=>{
    if(error !== null || result.length<=0){
      console.log('error')
    }else{
      const musicPath = result[0].musicPath;
      console.log('music path',musicPath)
      const readableStream = fs.createReadStream(`./uploads/${musicPath}`)
      readableStream.pipe(res);
    }
  })
  
  
};

module.exports = {
  getMusicPath
}
