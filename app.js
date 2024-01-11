const counterEl = document.querySelector(".countervalue");
const plusEl = document.querySelector(".plus");
const minusEl = document.querySelector(".minus");

plusEl.addEventListener("click", () => {
  counterEl.textContent++;
});

minusEl.addEventListener("click", () => {
  counterEl.textContent--;
});

counterEl.textContent = 0;
