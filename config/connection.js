//Setting up mysql connection
var mysql = require("mysql");
var connection;
if (process.env.JawsDB_URL) {
  connection = mysql.createConnection(process.env.JawsDB_URL);
  
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.MYSQL_PASSWORD,
  database: "burgers_db"
});
};
//Making connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
// Export connection for our ORM to use.
module.exports = connection;

