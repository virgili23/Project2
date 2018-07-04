// Server.js - This file is the initial starting point for the Node/Express server.
// ________________________________________________________________________________

// ____________________________________________________________
// Dependencies
// ____________________________________________________________
var express = require("express");
var bodyParser = require("body-parser");

// ____________________________________________________________
// Sets up the Express App
// ____________________________________________________________
var app = express();
var PORT = process.env.PORT || 8080;

// ____________________________________________________________
// Sets up the Express app to handle data parsing
// ____________________________________________________________
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// Static directory to be served
app.use(express.static("public"));


// ____________________________________________________________
// Routes
// ____________________________________________________________
// require("./routes/api-routes.js")(app);
require("./routes/api-routes")(app);
// Here we introduce HTML routing to serve different HTML files
// require("./app/routes/html-routes.js")(app);

// ____________________________________________________________
// Starts the server to begin listening
// ____________________________________________________________

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
// });
