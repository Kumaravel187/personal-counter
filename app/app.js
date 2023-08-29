const counterValEl = document.getElementById("count");
const decreaseEl = document.getElementById("decrease");
const increaseEl = document.getElementById("increase");
const resetEl = document.getElementById("reset");

counterValEl.textContent = 0;

decreaseEl.addEventListener("click", function () {
  let message = "Counter cannot be negative";
  if (counterValEl.textContent <= 0) {
    console.log("Cannot be lower than zero");
    alert(message);
  } else {
    counterValEl.textContent--;
  }
});

increaseEl.addEventListener("click", function () {
  counterValEl.textContent++;
});

resetEl.addEventListener("click", function () {
  counterValEl.textContent = 0;
});
