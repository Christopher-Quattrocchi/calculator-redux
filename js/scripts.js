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
    let add = getFirstNumber() + getSecondNumber();
    updateAnswer(add);
}

function subtraction() {
    let subtraction = getFirstNumber() - getSecondNumber();
    updateAnswer(subtraction);
}

function multiply() {
    let multiply = getFirstNumber() * getSecondNumber();
    updateAnswer(multiply);
}

function divide() {
    let divide = getFirstNumber() / getSecondNumber();
    updateAnswer(divide);
}

function blank() {
    updateAnswer('');
}
