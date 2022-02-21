const form = document.querySelector('.login-form');
const formData = {};

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    if (form.email.value === '' || form.password.value === '') {
        window.alert('Все поля должны быть заполнены.');
    } else {
        formData.email = form.email.value;
        formData.password = form.password.value;
    }

    console.log(formData);

    form.reset();
}

// ----------------------------------------------------------------------------------------------------------

// function onFormSubmit(event) {
//     event.preventDefault();

//     const formData = new FormData(event.currentTarget);

//     formData.forEach((value, name) => {
//         if (value === '') {
//             window.alert(`Поле ${name} должно быть заполнено!`);
//         }
//     });
//     console.log(formData);

//     form.reset();
// }
