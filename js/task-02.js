const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const listEl = document.querySelector('#ingredients');

const makeListItem = elements => {
    return elements.map(element => {
        const itemEl = document.createElement('li');
        itemEl.classList.add('item');
        itemEl.textContent = element;
        return itemEl;
    });
};

const items = makeListItem(ingredients);

listEl.append(...items);
