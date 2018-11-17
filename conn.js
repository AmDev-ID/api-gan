const db = require('mysql');
const conn = db.createConnection({
    host: "localhost",
    user: "root",
    password: "mastar12",
    database: "mari_id"
});

conn.connect((err) => {
    if(err) throw err;
});

module.exports = conn;