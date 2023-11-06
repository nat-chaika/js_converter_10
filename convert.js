var input = document.getElementById('input');
var result = document.getElementById('result');

var inputType = document.getElementById('inputType');
var resultType = document.getElementById('resultType');

// Listener
input.addEventListener("input", updateResult);
inputType.addEventListener("change", updateResult);
resultType.addEventListener("change", updateResult);

function updateResult() {
    // Get the selected units and input value
    var inputUnit = inputType.value;
    var resultUnit = resultType.value;
    var inputValue = parseFloat(input.value);

    // Check if the input value is a valid number
    if (!isNaN(inputValue)) {
        // Define the conversion factors
        var conversionFactors = {
            centimeter: 1,
            meter: 0.01,
            kilometer: 0.00001,
            inch: 0.393701,
            foot: 0.0328084,
            yard: 0.0109361,
            mile: 0.00000621371,
        };

        // Perform the conversion
        var resultValue = inputValue * (1 / conversionFactors[inputUnit]) * conversionFactors[resultUnit];

        // Update the result field with the converted value
        result.value = resultValue.toFixed(2); // You can adjust the number of decimal places as needed
    } else {
        // Handle the case where the input is not a valid number
        result.value = "Invalid input";
    }
}

// Initialize the result field with a conversion
updateResult();
