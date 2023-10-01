const ref = {
    span: document.querySelector('#name-output'),
    input: document.querySelector('#name-input'),
}
ref.input.addEventListener('input', event => 
event.currentTarget.value === '' || event.currentTarget.value === ' ' ? ref.span.textContent = 'Anonimous' :
ref.span.textContent = event.currentTarget.value);



