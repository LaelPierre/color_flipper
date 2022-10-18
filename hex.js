const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let colors = "#";

  for (i = 0; i < 6; i++) {
    colors += hex[getRandomNumber()];
  }

  document.body.style.backgroundColor = colors;
  color.textContent = colors;
});

// function to get random number
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}
