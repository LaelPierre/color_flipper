const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "starTrek"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  // generate random number
  const randonNumber = getRandomNumber();

  document.body.style.backgroundColor = colors[randonNumber];
  color.textContent = colors[randonNumber];
});

// get a random number function
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
