// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var popsicle = {
  selectAll: function(cb) {
    orm.selectAll("popsicles", function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("popsicles", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("popsicles", objColVals, condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller
module.exports = popsicle;
