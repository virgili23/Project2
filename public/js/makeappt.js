// Code here handles what happens when a user submits a new customer on the form.
// Effectively it takes the form inputs then sends it to the server to save in the DB.

// when user clicks submit-btn
$("#submit-btn").on("click", function(event) {
  event.preventDefault();

  // make a newCustomer obj
  var newCustomer = {
    // customer_name from name input
    customer_name: $("#name").val().trim(),
    // customer_id from customer_id input
    phone: $("#phone").val().trim(),
    // datetime_start with moment.js
    datetime_start: $moment().format("YYYY-MM-DD hh:mm a"),
    // message from message input
    message: $("#message").val().trim()
  };


  // console.log(newCustomer);

  // send an AJAX POST-request with jQuery
  $.post("/api/new", newCustomer)
    // on success, run this callback
    .then(function(data) {
      // log the data we found
      var row = $("<div>");
      row.addClass("customer");

      row.append("<p>" + newCustomer.customer_name + " customer: </p>");
      row.append("<p>" + newCustomer.phone + "</p>");
      row.append("<p>At " + moment(newCustomer.datetime_start).format("h:mma on dddd") + "</p>");
      row.append("<p>" + newCustomer.message + "</p>");

      $("#customer-area").prepend(row);
    });

  // empty each input box by replacing the value with an empty string
  $("#name").val("");
  $("#phone").val("");
  $("#startTime").val("");
  $("#message").val("");
});

// When the page loads, grab all of our customer
$.get("/api/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("customer");

      row.append("<p>" + data[i].customer_name + " customer.. </p>");
      row.append("<p>" + data[i].phone + "</p>");
      row.append("<p>At " + moment(data[i].datetime_start).format("h:mma on dddd") + "</p>");
      row.append("<p>" + data[i].message + "</p>");

      $("#customer-area").prepend(row);

    }

  }

});

