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
}
