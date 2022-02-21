const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onSizeInput);

function onSizeInput(event) {
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
