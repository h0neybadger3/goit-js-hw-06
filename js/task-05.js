const refs = {
    nameOutput: document.querySelector('#name-output'),
    textInput: document.querySelector('#name-input'),
};

refs.textInput.addEventListener('input', onNameInput);

function onNameInput(event) {
    event.currentTarget.value === ''
        ? (refs.nameOutput.textContent = 'Anonymous')
        : (refs.nameOutput.textContent = event.currentTarget.value);
}
