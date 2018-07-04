// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");


// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads index.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // add route loads the index.html page, * Make Appointment Modal*
  // where users can enter new characters to the db
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

  // all route loads the index.html page,
  // where all characters in the db are displayed
  app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });

};
