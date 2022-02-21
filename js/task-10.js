const refs = {
    inputEl: document.querySelector('input'),
    createButton: document.querySelector('[data-create]'),
    destroyButton: document.querySelector('[data-destroy]'),
    boxesContainer: document.querySelector('#boxes'),
};

const valueInput = {};
const arrayOfBoxes = [];

refs.inputEl.addEventListener('input', onValueInput);
refs.createButton.addEventListener('click', createBoxes.bind(this, valueInput));
refs.destroyButton.addEventListener('click', destroyBoxes);

function onValueInput(event) {
    valueInput.amount = event.currentTarget.value;
}

function createBoxes({ amount }) {
    let boxWidth = 20;
    let boxHeight = 20;
    console.log(amount);
    for (let i = 0; i < amount; i += 1) {
        const box = document.createElement('div');
        boxWidth += 10;
        boxHeight += 10;
        box.classList.add('boxes__box');
        box.style.cssText = `
            width: ${boxWidth}px;
            height: ${boxHeight}px;
            background-color: ${getRandomHexColor()}
            `;
        arrayOfBoxes.push(box);
    }

    refs.boxesContainer.append(...arrayOfBoxes);
}

function destroyBoxes(event) {
    const boxEl = document.querySelectorAll('.boxes__box');
    boxEl.forEach(element => element.remove());
    refs.inputEl.value = '';
    arrayOfBoxes.splice(0);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
