function add() {
    let add = parseInt(document.getElementById('number1').value) + parseInt(document.getElementById('number2').value);
    return document.getElementById("answer").innerHTML = add;
}

function subtraction() {
    let subtraction = parseInt(document.getElementById('number1').value) - parseInt(document.getElementById('number2').value);
    return document.getElementById("answer").innerHTML = subtraction;
}

function multiply() {
    let multiply = parseInt(document.getElementById('number1').value) * parseInt(document.getElementById('number2').value);
    return document.getElementById("answer").innerHTML = multiply;
}

function divide() {
    let divide = parseInt(document.getElementById('number1').value) / parseInt(document.getElementById('number2').value);
    return document.getElementById("answer").innerHTML = divide;
}

function blank() {
    return document.getElementById("answer").innerHTML = '';
}