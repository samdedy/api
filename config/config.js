const mysql = require('mysql');

const connectionMySQL = mysql.createConnection({
    multipleStatements: true,
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "react-app"
});

module.exports = connectionMySQL;