const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexColor = "#";
  for (let i = 0; i <= 5; i++) {
    hexColor += hex[getRandomNumber()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// let copy = document.getElementById("copy-button")
// console.log(copy)
// copy.addEventListener("click",copyToClipboard)

function copyToClipboard() {
  let input;
  input = document.getElementById("copy").textContent;
  console.log(input)
  navigator.clipboard.writeText(input);
}