// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
   // var newSleep = $(this).data("newsleep");

    var newburgerState = {
      devoured: "1"
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newburgerState
    }).then(
      function() {
        console.log("changed devoured to");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log('here')
    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: "0"
    };
    console.log(newBurger)

    // Send the POST request.S
    $.ajax("/api/burgers/", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});