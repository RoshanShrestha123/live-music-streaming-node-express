const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"live-music"
});

dbConnect = (callback) =>{
    conn.connect((error,result)=>{
        if(error) throw error;
        return callback();
    })
}

module.exports ={
    dbConnect,
    conn
}