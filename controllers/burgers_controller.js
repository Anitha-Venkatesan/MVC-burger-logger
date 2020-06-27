var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});
console.log("Posting");
router.post("/api/burgers", function (req, res) {
  console.log(req.body);
  burger.insertOne(["burger_name","devoured"],
    [req.body.burger_name, req.body.devoured || 0],
    function (result) {
      res.json({ id: result.insertId });      
    });
});



// Export routes for server.js to use.
module.exports = router;

