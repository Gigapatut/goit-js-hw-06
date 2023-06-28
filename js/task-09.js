function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");

const color = document.querySelector(".color");

const button = document.querySelector(".change-color");

button.addEventListener("click", () => {
  const backgroundColor = getRandomHexColor();
  color.textContent = backgroundColor;
  body.style.backgroundColor = backgroundColor;
});
