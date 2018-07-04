// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Customer = require("../models/customer.js");

// Routes
// =============================================================
module.exports = function(app) {
  // Search for Specific Customer (or all customers) then provides JSON
  app.get("/api/all", function(req, res) {
    // Finding all customer, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use

    // Display the data for all of the customers.
    // (Note how we're using Sequelize here to run our searches)
    Customer.findAll({}).then(function(result) {
      // the .then function
      return res.json(result);
      });
  });

  // If a user sends data to add a new customer...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var customer = req.body;
    console.log("Customer Info:");
    console.log(req.body);

    // Then add the customer to the database using sequelize
    Customer.create({
      customer_name: customer.customer_name,
      phone: customer.phone,
      datetime_start: customer.datetime_start,
      message: customer.message
    }).then(function(results) {
      // `results` here would be the newly created customers
      res.end();
    });

  });

};
