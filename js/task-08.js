const form = document.querySelector('.login-form')

form.addEventListener('submit', handlerSubmit)
 
function handlerSubmit(evt) {
  evt.preventDefault()
  const { elements: { email, password } } = evt.currentTarget;
  if (email.value === "" || password.value === "") {
    alert("Please fill in all the fields!");
  } else {
    console.log([`Email: ${email.value}, Password: ${password.value}`]);
evt.currentTarget.reset()
}
}
