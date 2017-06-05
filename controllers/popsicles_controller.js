// Dependencies
// =============================================================
var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // TO DISPLAY ALL THE POPSICLES IN THE TABLE
  app.get("/", function(req, res) {
    db.Popsicle.findAll({attributes : ['id', 'pop_name', 'devoured']})
    .then(function(results) {
      var hbsObject = {
        popsicles: results
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });

  // TO POST A NEW POPSICLE TO THE TABLE
  app.post("/", function(req, res) {
    db.Popsicle.create({ pop_name: req.body.name })
      .then(function(results) {
        res.redirect("/");
      });
  });

  // TO UPDATE A POPSICLE'S "DEVOURED" VALUE IN THE TABLE
  app.put("/:id", function(req, res) {
    var condition = { where: { id: req.params.id } };
    var isdevoured = req.body.devoured;

    db.Popsicle.update({devoured: isdevoured}, condition)
      .then(function(results) {
        res.json(results);
      });
      
      res.redirect("/");
  });
};
