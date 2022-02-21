const listEl = document.querySelector('#categories');
const listItemEl = listEl.children;

const showMessage = elements => {
    console.log(`Number of categories: ${elements.length}`);
    for (const element of elements) {
        console.log(`Category: ${element.firstElementChild.textContent}`);
        console.log(`Elements: ${element.lastElementChild.children.length}`);
    }
};

showMessage(listItemEl);
