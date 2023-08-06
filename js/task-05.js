const input = document.querySelector('#name-input')
const span = document.querySelector('#name-output')

input.addEventListener('input', hadlerPress)

function hadlerPress(evn) {
    span.textContent = evn.target.value
    if (evn.target.value.trim() === "") {
        span.textContent = 'Anonymous'
        
    }
}