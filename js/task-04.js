
const buttons = {
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
};

const value = document.querySelector('#value');
console.dir(value)
let counterValue = 0;


buttons.decrement.addEventListener('click', handlerClickOff);
function handlerClickOff(evn) {
    counterValue -= 1
    value.textContent = counterValue

}
buttons.increment.addEventListener('click', handlerClickOn);

function handlerClickOn(evn) {
    counterValue += 1
    value.textContent = counterValue

}