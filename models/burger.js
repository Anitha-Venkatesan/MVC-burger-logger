var orm = require("../config/connection.js");

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(cb) {
    orm.selectAll("*","burgers" )
      console.log("burger.js");
      
    
  },
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
