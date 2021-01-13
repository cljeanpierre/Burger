//Wait to attach handlers until the DOM is fully loaded.

$(function () {

    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        //Always preventDefault on a submit event.
        var newBurger = {
            name: $("#bur").val().trim()
            // devour: $("[name=devour]:checked").val().trim()
        };
        console.log (newBurger);

        //Send POST request 
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger")
                //Reload the page to get the updated list
                location.reload();
            }
        );
    });




    $(".eat-burger").on("click", function (event) {
        var id = $(this).data("id");
        var confirmEat = $(this).data("neweaten") === false;

        var confirmEatState = {
            devour: confirmEat
        };
        console.log("id" + id + "eaten: " + confirmEatState.devour);
        
        //Send PUT request
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: confirmEatState
        }).then(
            function () {
                console.log("Devoured state changed to", confirmEat);
                //Reload the page to get updated list
                location.reload();
            }
        );
    });



    $(".delete-burger").on("click", function(event) {
        var id = $(this).data("id");
    //Send the DELETE request
    $.ajax("/api/burgers/" + id, {
    type: "DELETE"
    }).then(
    function () {
        console.log("deleted burger", id);
        //Reload the page to get the updated list
        location.reload();
    }
   );    
 });
});