const display = document.getElementById('display');


function getValue(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = '';
}

function showResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}