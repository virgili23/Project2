// Code here handles how the page displays the live snippet
// It pings the server. The server then pings the database and displays all of the current appointments.

// when user clicks submit-btn
$("#liveSnip").on("click", function(event) {
  event.preventDefault();

  // When the page loads, grab all of the customers
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
});