let counterValue = 0;

const refs = {
    incrementEl: document.querySelector('[data-action="increment"]'),
    decrementEl: document.querySelector('[data-action="decrement"]'),
    counterValueEl: document.querySelector('#value'),
};

refs.incrementEl.addEventListener('click', onIncrementBtnClick);
refs.decrementEl.addEventListener('click', onDecrementBtnClick);

function onIncrementBtnClick() {
    counterValue += 1;
    refs.counterValueEl.textContent = counterValue;
}

function onDecrementBtnClick() {
    counterValue -= 1;
    refs.counterValueEl.textContent = counterValue;
}
