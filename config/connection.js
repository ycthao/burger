// Set up mysql connection
let mysql = require("mysql");

// Defining connection
let connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
})