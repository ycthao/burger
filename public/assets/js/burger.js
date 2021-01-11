$(function () {
    // $(".change-devoured").on("click", function (event) {
    //     let id = $(this).data("id");
    //     //let newdevoured = $(this).data("newdevoured");

    //     let newdevouredState = {
    //         devoured: 1
    //     };

    //     // Send the PUT request.
    //     $.ajax("/api/burger/" + id, {
    //         type: "PUT",
    //         data: newdevouredState
    //     }).then(
    //         function () {
    //             console.log("changed devoured to", newdevoured);
    //             // Reload the page to get the updated list
    //             location.reload();
    //         }
    //     );
    // });

    $(".create-form").on("submit", function (event) {
        // Make sure to preventDefault on a submit event.
        //event.preventDefault();

        // let newBurger = {
        //     burger_name: $("#addBurger").val().trim(),
        // };

        // console.log(newBurger);

        // Send the POST request.
        $.ajax({
            url: "/api/burger",
            type: "POST",
            data: {
                burger_name: $("#addBurger").val(),
                devoured: 0
            }
        }).then(
            function () {
                console.log("created new burger");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });



});