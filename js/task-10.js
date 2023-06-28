function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const boxes = document.querySelector("#boxes");

const controls = document.querySelector("#controls");

const input = controls.firstElementChild;

const btnCreate = input.nextElementSibling;

const btnDestroy = controls.lastElementChild;




  
