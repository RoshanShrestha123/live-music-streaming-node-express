const database = require('../../../config/database');
const db = database.conn;

selectAllMusic = (callback) => {
  const sql = "SELECT * FROM music";
  db.query(sql,(error,result)=>{
    callback(error,result);
  })
}

module.exports = {
  selectAllMusic
}