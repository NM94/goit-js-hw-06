const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text')

input.addEventListener('input', handlerChange)
function handlerChange(evt) {
     const fontStyle = evt.currentTarget.value
    console.dir(`${fontStyle}px`)
    span.style.fontSize = `${fontStyle}px`
 }