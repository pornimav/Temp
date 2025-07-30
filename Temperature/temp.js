// Get DOM elements
const degree = document.getElementById("degree");
const tempType = document.getElementById("temp-type");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("celsius");

// Add click event listener to the convert button
convertBtn.addEventListener("click", function () {
  // Parse the input degree value as a float
  let inputValue = parseFloat(degree.value);
  let selectedTemp = tempType.value;
  let celsius;

  // Check for valid input
  if (isNaN(inputValue)) {
    result.innerText = "Please enter a valid number.";
    return;
  }

  // Conversion logic
  if (selectedTemp === "fahrenheit") {
    // Fahrenheit to Celsius: (°F − 32) × 5/9
    celsius = (inputValue - 32) * (5 / 9);
  } else if (selectedTemp === "kelvin") {
    // Kelvin to Celsius: K − 273.15
    celsius = inputValue - 273.15;
  }

  // Display the result, rounded to 2 decimal places
  result.innerText = `${celsius.toFixed(2)} °C`;
});
