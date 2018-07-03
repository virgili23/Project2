// Code here handles what happens when a user submits a new customer on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks add-btn
$("#sumbit-btn").on("click", function(event) {
  event.preventDefault();
  
  // make a newCustomer obj
  var newCustomer = {
    // customer_name from name input
    customer_name: $("#name").val().trim(),
    // email from email input
    email: $("#email").val().trim(),
    // customer_id from customer_id input
    customer_id: $("#customerID").val().trim(),
    // datetime_start from datetime_start input
    datetime_start: $("#startTime").val().trim(),
    // datetime_end from datetime_end input
    datetime_end: $("#endTime").val().trim(),
    // status_id from status_id input
    status_id: $("#status").val().trim(),
    // message from message input
    note: $("#message").val().trim()
  };

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newCustomer)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      console.log(data);
      // tell the user we're adding a customer with an alert window
      alert("New customer added!");
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#email").val("");
  $("#customerID").val("");
  $("#startTime").val("");
  $("#endTime").val("");
  $("#status").val("");
  $("#message").val("");

});

