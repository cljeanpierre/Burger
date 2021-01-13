// Set up MySQL connection.
var mysql = require("mysql");


if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Iluvbugs2!!",
    database: "burgers_db"
});
};

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