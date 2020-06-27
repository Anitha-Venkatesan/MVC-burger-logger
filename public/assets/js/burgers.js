$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val(),
      //devoured: $("[name=devoured]:false").val()
    };
    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(function() {
        console.log("Added new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
  
