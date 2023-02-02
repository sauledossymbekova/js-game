const board = document.querySelector("#board");
const colors = ["#0000CD", "#00FFFF", "#7FFFD4", "#5F9EA0", "#6495ED", "#87CEFA", "#00008B", "#00CED1", "#00BFFF", "#1E90FF", "#ADD8E6",
"#B0C4DE", "#191970"];
const SQUARES_NUMBER = 1200;

for (let i = 0; i < SQUARES_NUMBER; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseleave", () => removeColor(square));

  board.append(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.backgroundColor = "#1d1d1d";
  element.style.boxShadow = `0 0 2px #000`;
}

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}
