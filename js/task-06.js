const inputEL = document.querySelector('#validation-input');

inputEL.addEventListener('blur', onBlurCheckPassword);

function onBlurCheckPassword(event) {
    if (event.currentTarget.value.length === Number(inputEL.dataset.length)) {
        inputEL.classList.toggle('valid');
        inputEL.classList.remove('invalid');
    } else {
        inputEL.classList.add('invalid');
        inputEL.classList.remove('valid');
    }
}