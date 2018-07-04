// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "customer" model that matches up with DB
var Customer = sequelize.define("customer", {
  // the customer_name gets saved as a string
  customer_name: Sequelize.STRING,
  // the customer's phone (a string)
  phone: Sequelize.STRING,
  // and the customer's datetime_start (a date)
  datetime_start: Sequelize.DATE,
  // the customer's note (a string)
  message: Sequelize.STRING
});

// Syncs with DB
Customer.sync();

// Makes the Customer Model available for other files (will also create a table)
module.exports = Customer;