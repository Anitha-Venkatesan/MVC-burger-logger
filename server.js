//var orm = require("./config/orm.js");

// For each of the following select methods, a string argument containing wildcard character ("*")
// could work in most environments, but some MySQL servers (like MAMP) will return an error.

// Console log all the party_name's.

var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

/* orm.selectAll(["id","burger_name","devoured"], "burgers");
orm.insertOne("burgers",["burger_name","devoured"],function(res) {
    cb(res);
 */  
