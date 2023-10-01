const ref = {
    input: document.querySelector('#font-size-control'),
    span: document.querySelector('#text'),
};
// set medium size for fontSize 
ref.span.style.fontSize = '56px';

// add Event Listenet 
ref.input.addEventListener('input', () => ref.span.style.fontSize = `${ref.input.value}px`);
