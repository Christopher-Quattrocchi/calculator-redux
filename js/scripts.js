function getFirstNumber() {
    return parseInt(document.getElementById('number1').value);
}

function getSecondNumber() {
    return parseInt(document.getElementById('number2').value);
}

function add() {
    let add = getFirstNumber() + getSecondNumber();
    return document.getElementById("answer").innerHTML = add;
}

function subtraction() {
    let subtraction = getFirstNumber() - getSecondNumber();
    return document.getElementById("answer").innerHTML = subtraction;
}

function multiply() {
    let multiply = getFirstNumber() * getSecondNumber();
    return document.getElementById("answer").innerHTML = multiply;
}

function divide() {
    let divide = getFirstNumber() / getSecondNumber();
    return document.getElementById("answer").innerHTML = divide;
}

function blank() {
    return document.getElementById("answer").innerHTML = '';
}
