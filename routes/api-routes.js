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
  app.get("/api/:customer?", function(req, res) {
    // If the user provides a specific customer in the URL...
    if (req.params.customers) {
      // Then display the JSON for ONLY that customer.
      // (Note how we're using the ORM here to run our searches)
      Customer.findOne({
        where: {
          routeName: req.params.customers
        }
      }).then(function(result) {
        return res.json(result);
      });
    }
    else {
      // Otherwise...
      // Otherwise display the data for all of the customers.
      // (Note how we're using Sequelize here to run our searches)
      Customer.findAll({}).then(function(result) {
        return res.json(result);
      });
    }
  });

  // If a user sends data to add a new customer...
  app.post("/api/new", function(req, res) {
    // Take the request...
    var customer = req.body;

    // Create a routeName

    // Using a RegEx Pattern to remove spaces from customer.name
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    var routeName = customer.name.replace(/\s+/g, "").toLowerCase();

    // Then add the customer to the database using sequelize
    Customer.create({
      routeName: routeName,
      customer_name: customer.customer_name,
      email: customer.email,
      phone: customer.phone,
      customer_id: customer.customer_id,
      datetime_start: customer.datetime_start,
      datetime_end: customer.datetime_end,
      status_id: customer.status_id,
      note: customer.note
    });
  });
};
