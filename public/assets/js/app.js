$(document).ready(function() {

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        //User enters burger to be eaten
        var newBurger = {
            name: $("#burgerEntry").val().trim()
        };
        console.log(newBurger);

        //send POST request to "api/burgers" route
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created new burger")
                //reloads page to get updated list of burgers to be devoured
                location.reload();
            }
        );
    });

    //function to update 
    $(".eat-burger").on("click", function(event) {
        var id = $(this).data("id");
        var confirmEat = $(this).data("neweaten") === false;
        var confirmEatState = {devoured: confirmEat};
        console.log("ID: " + id + "eaten: " + 
confirmEatState.devour);

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: confirmEatState
        }).then(
            function() {
                console.log("Devoured state changed to  " + confirmEat);
                //reloads page to get updated list of burgers to be devoured
                location.reload();
            }
        );
    });

}) 