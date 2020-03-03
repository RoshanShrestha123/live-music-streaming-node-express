const database = require('../../../config/database');
const db = database.conn;

insertMusic = (fileName,originalname,callback) => {
  const sql = `INSERT INTO music (musicPath,name) VALUES ('${fileName}','${originalname}')`;
  db.query(sql,(error,result)=>[
      callback(error,result)
  ])
}

module.exports = {
  insertMusic
}