const inputs = document.querySelectorAll('input')
inputs.forEach(input => input.addEventListener('keyup', validateInput))

function validateInput(e) {
  e.target.setAttribute(
    'aria-valid',
    e.target.value ? 'true' : 'false'
  )
}