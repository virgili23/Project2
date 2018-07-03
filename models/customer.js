// Dependencies
// =============================================================

// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/config.js");

// Creates a "customer" model that matches up with DB
var Customer = sequelize.define("customer", {
  // the customer_name gets saved as a string
  customer_name: Sequelize.STRING,
  // the email of the customer (a string)
  email: Sequelize.STRING,
  // the customer's phone (a string)
  phone: Sequelize.STRING,
  // the customer's customer_id (a string)
  customer_id: Sequelize.INTEGER,
  // and the customer's datetime_start (a date)
  datetime_start: Sequelize.DATE,
  // and the customer's datetime_end (a date)
  datetime_end: Sequelize.DATE,
  // the customer's status_id (a string)
  status_id: Sequelize.STRING,
  // the customer's note (a string)
  note: Sequelize.STRING
});

// Syncs with DB
Customer.sync();

// Makes the Customer Model available for other files (will also create a table)
module.exports = Customer;