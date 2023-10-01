const ref = {
    span: document.querySelector('#name-output'),
    input: document.querySelector('#name-input'),
}
ref.input.addEventListener('input', event => ref.span.textContent = event.currentTarget.value);



