function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const btnChangeColor = document.querySelector('.change-color');
const spanShowColor = document.querySelector('.color');
const bodyShow = document.querySelector('body');

btnChangeColor.addEventListener('click',
  () => bodyShow.style.backgroundColor = spanShowColor.textContent = getRandomHexColor());
// ============================================================================