// api-routes.js - this file offers a set of routes for displaying and saving data to the db

const db = require('../models');

// These are the routes
module.exports = function (app) {
  // GET route for getting all users
  app.get("/api/profile/", function(req,res) {
    db.Profiles.findAll({})
    .then(function(dbProfiles) {
      res.json(dbProfiles);
    });
  });
  // POST route for saving a new user
  app.post('api/profile', function(req,res) {
    // bla bla
  });
  // GET route for sleeps of a user
  app.get("/api/sleep/user/:user", function(req,res) {
    db.Sleeps.findAll({
      where: {
        user: req.params.user
      }
    })
    .then(function(dbSleeps) {
      res.json(dbSleeps);
    });
  });
  // POST a new sleeps entry
  app.post('/api/sleep', function(req,res) {
    // bla bla
  })
};

