function getFirstNumber() {
    return parseInt(document.getElementById('number1').value);
}

function getSecondNumber() {
    return parseInt(document.getElementById('number2').value);
}

function updateAnswer(answer) {
    document.getElementById("answer").innerHTML = answer;
}

function add() {
    const additionResult = getFirstNumber() + getSecondNumber();
    updateAnswer(additionResult);
}

function subtraction() {
    const subtractionResult = getFirstNumber() - getSecondNumber();
    updateAnswer(subtractionResult);
}

function multiply() {
    const multiplicationResult = getFirstNumber() * getSecondNumber();
    updateAnswer(multiplicationResult);
}

function divide() {
    const divisionResult = getFirstNumber() / getSecondNumber();
    updateAnswer(divisionResult);
}

function blank() {
    updateAnswer('');
    document.getElementById('number1').value = '';
    document.getElementById('number2').value = '';
}

function init() {
    const addButton = document.getElementById('add-button');
    addButton.addEventListener('click', add);

    const subtractButton = document.getElementById('subtract-button');
    subtractButton.addEventListener('click', subtraction);

    const multiplyButton = document.getElementById('multiply-button');
    multiplyButton.addEventListener('click', multiply);

    const divideButton = document.getElementById('divide-button');
    divideButton.addEventListener('click', divide);

    const clearButton = document.getElementById('clear-button');
    clearButton.addEventListener('click', blank);
}

document.addEventListener("DOMContentLoaded", function() {
   init();
});
