// ________________________________________________________________________________
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
require("./routing/html-routes.js")(app);
require("./routing/api-routes.js")(app);

// ____________________________________________________________
// Starts the server to begin listening
// ____________________________________________________________

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});