const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('/',(req,res)=>{
    
    const readableStream = fs.createReadStream('../music1.mp3')
    readableStream.pipe(res);
    
})


module.exports = router;