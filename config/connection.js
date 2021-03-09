// Set up mysql connection
let mysql = require("mysql");
let connection;

// Defining connection
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burgers_db",
});

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "klbcedmmqp7w17ik.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "s4po7jfle084djun",
    password: "m4evw9rnk9mt8s9i",
    database: "svmnb316hf6s5w4c",
  });
}

// Making the connection
connection.connect(function (err) {
  if (err) {
    console.error("Error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;
