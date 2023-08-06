function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const span = document.querySelector('.color');
const button = document.querySelector('.change-color')
const body = document.querySelector("body")

button.addEventListener('click', handlerClick)

function handlerClick(evt) {
  let randomHex = getRandomHexColor();
  body.style.backgroundColor = randomHex;
  span.textContent = randomHex;
}

