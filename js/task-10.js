function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const controls = document.querySelector('#controls');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const boxes = document.querySelector('#boxes')
const input = document.querySelector('input')


create.addEventListener('click', createBoxes )
  

function createBoxes(amount) {
  let divE1 = "";
  for (let i = 0; i <= amount; i += 1) {
    input.value = amount;
    let size = 30;
    const color = getRandomHexColor();
    divE1 += `<div style="width:${size}px; heigth:${size}px; background-color:${color}"></div>`
    size += 10;
  }
  return divE1;
};

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {

}