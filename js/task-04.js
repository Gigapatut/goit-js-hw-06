const descrBtn = document.querySelector('#counter button[data-action="decrement"]');

const value = document.querySelector('#value');

const incrBtn = document.querySelector('#counter button[data-action="increment"]');

const counterValue = value.textContent;

const decrement = () => {
    value.textContent--;
};
descrBtn.addEventListener("click", decrement);

const increment = () => {
    value.textContent++;
};
incrBtn.addEventListener("click", increment);

