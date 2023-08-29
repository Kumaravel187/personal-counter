// Get the element that will display the counter value
const counterValEl = document.getElementById("count");

// Get all buttons with class "btn"
const btns = document.querySelectorAll(".btn");

// Initialize the counter value
let count = 0;

// Loop through each button and attach a click event listener
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    // Check if the clicked button has the class "decrease"
    if (btn.classList.contains("decrease")) {
      // Decrease the counter value
      count--;
    }
    // Check if the clicked button has the class "increase"
    else if (btn.classList.contains("increase")) {
      // Increase the counter value
      count++;
    }
    // If the clicked button has neither "decrease" nor "increase" class
    else {
      // Reset the counter value to 0
      count = 0;
    }

    // Change text color based on counter value
    if (count < 0) {
      // Set text color to red for negative values
      counterValEl.style.color = "#F94144";
    } else if (count > 0) {
      // Set text color to green for positive values
      counterValEl.style.color = "#90BE6D";
    } else {
      // Set text color to light yellow for zero
      counterValEl.style.color = "#eaf8bf";
    }

    // Update the text content of the counter element to reflect the new value
    counterValEl.textContent = count;
  });
});
