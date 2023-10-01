
const counterValue = document.querySelector('#value');
let result = 0;

const btnIncrement = document.querySelector('[data-action="increment"]');
const btnDecrement = document.querySelector('[data-action="decrement"]');

btnIncrement.addEventListener('click', () => counterValue.textContent = result += 1);
btnDecrement.addEventListener('click', () => counterValue.textContent = result -= 1);
// ==================================================================================================





