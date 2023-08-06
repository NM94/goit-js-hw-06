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
  for (let i = 0; i < amount; i+= 1) {
  }
  if (Number(input.value >= 1 && Number(input.value) <= 100)) {
    amount = Number(input.value)
  }
};

destroy.addEventListener('click', destroyBoxes);

function destroyBoxes() {

}