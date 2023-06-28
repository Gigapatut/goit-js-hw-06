const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");

const line = [];
ingredients.forEach(function (element) {
  const el = document.createElement("li");  
  el.textContent = element;
  el.classList.add("item");
 
  return line.push(el);
}); 
list.append(...line);

// інший спосіб -------------------------------------
// const markup = ingredients
//   .map((ingredient) => `<li class="item">${ingredient}</li>`)
//   .join("");
// console.log(markup);

// list.insertAdjacentHTML("beforeend", markup);
