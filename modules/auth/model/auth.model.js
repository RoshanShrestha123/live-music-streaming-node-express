const database = require("../../config/database");
const db = database.conn;

selectUsers = (email, password, callback) => {
  const sql = `SELECT * FROM userInfo WHERE email="${email}" AND password="${password}"`;
  db.query(sql, (error, result) => {
    callback(error, result);
  });
};

insertUser = (keys, values, callback) => {
  const sql = `INSERT INTO userInfo (${keys}) VALUES (${values})`;
  db.query(sql, (error, result) => {
    callback(error, result);
  });
};


module.exports = {
  selectUsers,
  insertUser
};
