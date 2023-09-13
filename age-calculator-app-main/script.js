const form = document.querySelector('.ageCalculatorForm');



form.addEventListener('submit', function() {
    event.preventDefault();
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());
    const date = new Date(values.year, values.month, values.day);
    console.log(date);

    emptyFields();
    const todaysDate = new Date();
    isDateValid(date);
    console.log(isDateValid(date));
});

function isDateValid(dateStr) {
    return !isNaN(new Date(dateStr));
};

function emptyFields() {
    const day = document.querySelector('#day');
    const month = document.querySelector('#month');
    const year = document.querySelector('#year');
    if (day.value === '' || month.value === '' || year.value === '' ) {
        day.appendChild(document.createTextNode('Please enter a valid day'));
    }
}