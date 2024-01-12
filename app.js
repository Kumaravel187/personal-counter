// Select the HTML elements with the specified classes
const counterEl = document.querySelector(".countervalue");
const plusEl = document.querySelector(".plus");
const minusEl = document.querySelector(".minus");

// Add click event listener for the plus icon
plusEl.addEventListener("click", () => {
  // Increment the counter value when the plus icon is clicked
  counterEl.textContent++;
});

// Add click event listener for the minus icon
minusEl.addEventListener("click", () => {
  // Check if the counter is greater than 0 before decrementing
  if (counterEl.textContent > 0) {
    // Decrement the counter value when the minus icon is clicked
    counterEl.textContent--;
  }
});

// Set the initial counter value to 0
counterEl.textContent = 0;
