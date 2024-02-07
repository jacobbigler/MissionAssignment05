// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// Load jQuery from a CDN
var script = document.createElement('script');
script.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

// Wait for jQuery to be loaded
script.onload = function () {
    $(function () {
        // Function to calculate result
        function calculateResult(hours) {
            return "$" + (hours * 229.54);
        }

        // Event handler for button click
        $("#btnSubmit").on("click", function () {
            // Get the number of hours from the input field
            var hours = parseFloat($("#intHours").val().toString());

            // Validate input
            if (isNaN(hours) || hours <= 0) {
                alert("Please enter a positive number for hours.");
                return;
            }
            
            var result = calculateResult(hours);
            
            $("#calculated-result").text(result);
        });

        // Event handler for input field keypress
        $("#intHours").on("keypress", function (event) {
            // Check if Enter key was pressed (key code 13)
            if (event.which == 13) {
                // Trigger the button click event
                $("#btnSubmit").trigger("click");
                event.preventDefault();
            }
        });
    });
};

