// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 5500,
  user: "root",
  password: "Iluvbugs2!!",
  database: "burgers_db"
});

// Make the connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export the connection for ORM to use.
module.exports = connection;