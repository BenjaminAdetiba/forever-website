$(document).ready(function() {
    // Show form and exit button when showFormBtn is clicked
    $("#showFormBtn").click(function() {
        $("#enlargedImageContainer").show();
        $("#formContainer").show();
    });

    // Hide form and exit button when exitButton is clicked
    $("#exitButton").click(function() {
        $("#enlargedImageContainer").hide();
        $("#formContainer").hide();
    });

    // Initialize datepickers
    $("#datepicker1").datepicker();
    $("#datepicker2").datepicker();

    // Function to calculate and display total amount
    function calculateTotal() {
        var selectedValue = parseInt($("#cars").val());
        var nights = parseInt($("#nights").val()); // Assuming you have an input field with id "nights" for entering the number of nights

        // Calculate the subtotal by multiplying the selected value by 250
        var subtotal = selectedValue * 250;

        // Calculate the total by multiplying the subtotal by the number of nights
        var total = subtotal * nights;

        // Display the total in the paragraph with id "totalAmount"
        $("#totalAmount").text("Total Amount: R" + total);
    }

    // Calculate and display total when the page loads
    calculateTotal();

    // Calculate and display total when generateButton is clicked
    $("#generateButton").click(function() {
        calculateTotal();
    });
});
