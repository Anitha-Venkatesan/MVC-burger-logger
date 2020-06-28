$(function() {
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var newBurger = {
      burger_name: $("#burger").val()
      //devoured: $("#devourIt").val()
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
  //devoured the burger after cicking the button
  $("button[name='devoured']").on("click", function(event) {
    var id = $(this).attr("value");
    var devouredTheBurger = {
        devoured: true
    };
        // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredTheBurger
    }).then(function() {
        console.log("Devoured the burger", devouredTheBurger);
        // Reload the page to get the updated list
        location.reload();
    });
  });
});
