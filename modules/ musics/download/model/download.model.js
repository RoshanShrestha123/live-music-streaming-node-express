const DATABASE = require ('../../../config/database');
const DB = DATABASE.conn;
const TABLE_NAME = 'music'

selectMusic = (id,callback) => {
  const sql = `SELECT musicPath FROM ${TABLE_NAME} WHERE id=${id}`;
  DB.query(sql,(error,result)=>{
    callback(error,result)
  })
}

module.exports = {
  selectMusic
}