const refs = {
    bodyEl: document.body,
    changeColorBtn: document.querySelector('.change-color'),
    nameColor: document.querySelector('.color'),
};

refs.changeColorBtn.addEventListener('click', onButtonChangeColor);

function onButtonChangeColor() {
    const color = getRandomHexColor();
    refs.bodyEl.style.backgroundColor = color;
    refs.nameColor.textContent = color;
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
