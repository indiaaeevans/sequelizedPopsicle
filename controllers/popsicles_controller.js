var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var popsicle = require("../models/popsicle.js");

// ROUTES

// TO DISPLAY ALL THE POPSICLES IN THE TABLE
router.get("/", function(req, res) {
  popsicle.selectAll(function(data) {
    var hbsObject = {
      popsicles: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

// TO POST A NEW POPSICLE TO THE TABLE
router.post("/", function(req, res) {
  popsicle.insertOne(["pop_name"], [req.body.name], 
    function() {
      res.redirect("/");
    });
});

// TO UPDATE A POPSICLE'S "DEVOURED" VALUE IN THE TABLE
router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  var isdevoured = req.body.devoured;

  popsicle.updateOne({devoured: isdevoured},
    condition, function() {
      res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;
