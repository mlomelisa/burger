var express = require('express');
var models = require('../models/burger');

$(function() {
  $(".devourit").on("click", function(event) {
    var id = $(this).data("id");

    // Send the Update request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT"
    }).then(
      function() {
        console.log("debouret it ", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

 
  $(".update-burger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var updatedBurger = {
      burger_name: $("#burger").val().trim(),
    };

    var id = $(this).data("id");

    // Send the POST request.
    $.ajax("/api/quotes/" + id, {
      type: "PUT",
      data: updatedQuote
    }).then(
      function() {
        console.log("updated burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
