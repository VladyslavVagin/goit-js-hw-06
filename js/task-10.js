function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const inputNumber = document.querySelector('input');
const container = document.querySelector('div#boxes');

let amount = 0;

function createBoxes(amount) {
  let param = 20;
  for (let i = 0; i < amount; i += 1) {
    param += 10;
    const boxItem = `<div style='background-color: ${getRandomHexColor()}; width: ${param}px; height: ${param}px'></div>`;
    container.insertAdjacentHTML("afterbegin", boxItem);
  }
}

createButton.addEventListener('click', onClickAddInput);
destroyButton.addEventListener('click', onClickClearAll);

function onClickAddInput(amount) {
  amount = inputNumber.value;
  createBoxes(amount);
}
function onClickClearAll() {
  inputNumber.value = "";
  container.innerHTML = "";
}