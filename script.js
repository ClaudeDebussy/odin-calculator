let number1 = null;
let number2 = null;
let operator = null;
let pressedEquals = false;

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a/b;
}

function operate(operator, number1, number2){
    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    switch(operator){
        case "plus":
            return String(add(number1,number2));
        case "minus":
            return String(subtract(number1,number2));
        case "times":
            return String(multiply(number1,number2));
        case "dividedBy":
            return String(divide(number1,number2));
        default:
            console.log("Error in operate().");
    }
}

function createEventListeners(){
    //Initialize all buttons
    const zeroButton = document.getElementById("zero");
    zeroButton.addEventListener("click", function() {
        takeInput("0");});

    const oneButton = document.getElementById("one");
    oneButton.addEventListener("click", function() {
        takeInput("1");});

    const twoButton = document.getElementById("two");
    twoButton.addEventListener("click", function() {
        takeInput("2");});

    const threeButton = document.getElementById("three");
    threeButton.addEventListener("click", function() {
        takeInput("3");});

    const fourButton = document.getElementById("four");
    fourButton.addEventListener("click", function() {
        takeInput("4");});

    const fiveButton = document.getElementById("five");
    fiveButton.addEventListener("click", function() {
        takeInput("5");});

    const sixButton = document.getElementById("six");
    sixButton.addEventListener("click", function() {
        takeInput("6");});

    const sevenButton = document.getElementById("seven");
    sevenButton.addEventListener("click", function() {
        takeInput("7");});

    const eightButton = document.getElementById("eight");
    eightButton.addEventListener("click", function() {
        takeInput("8");});

    const nineButton = document.getElementById("nine");
    nineButton.addEventListener("click", function() {
        takeInput("9");});
    
    const delButton = document.getElementById("del");
    delButton.addEventListener("click", function() {
        takeInput("del");});

    const pointButton = document.getElementById("point");
    pointButton.addEventListener("click", function() {
        takeInput("point");});

    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", function() {
        takeInput("equals");});

    const dividedByButton = document.getElementById("dividedBy");
    dividedByButton.addEventListener("click", function() {
        takeInput("dividedBy");});

    const timesButton = document.getElementById("times");
    timesButton.addEventListener("click", function() {
        takeInput("times");});

    const minusButton = document.getElementById("minus");
    minusButton.addEventListener("click", function() {
        takeInput("minus");});

    const plusButton = document.getElementById("plus");
    plusButton.addEventListener("click", function() {
        takeInput("plus");});

    const allClearButton = document.getElementById("allClear")
    allClearButton.addEventListener("click", function() {
        takeInput("allClear");});

    //Initialize the screen
    const display = document.getElementById("display");
}

function takeInput(input){
    const numbersAsStrings = ["0","1","2","3","4","5","6","7","8","9"];
    const operatorsAsStrings = ["dividedBy", "times", "minus", "plus"];
    const equals = ["equals"];
    const clear = ["allClear"];
    if (
        numbersAsStrings.includes(input) && 
        number1 === null)
    {
        number1 = input;
        updateDisplay(number1)
    } else if (
        numbersAsStrings.includes(input) && 
        number1 != null &&
        operator === null &&
        pressedEquals === false)
    {
        number1 += input;
        updateDisplay(number1)
    } else if (
        operatorsAsStrings.includes(input) && 
        number1 != null &&
        number2 === null)
    {
        operator = input;
        updateDisplay();
    } else if (
        operatorsAsStrings.includes(input) &&
        number1 === null)
    {
        //do nothing;
    } else if (
        numbersAsStrings.includes(input) &&
        operator != null &&
        number1 != null &&
        number2 === null)
    {
        number2 = input;
        updateDisplay(number2)
    } else if (
        numbersAsStrings.includes(input) &&
        operator != null &&
        number1 != null &&
        number2 != null)
    {
        number2 += input;
        updateDisplay(number2)
    } else if (
        operatorsAsStrings.includes(input) &&
        operator != null &&
        number1 != null &&
        number2 != null)
    {
        number1 = operate(operator,number1,number2);
        number2 = null;
        operator = input;
        updateDisplay(number1);
    } else if (
        equals.includes(input) &&
        number1 &&
        number2 &&
        operator)
    {
        number1 = operate(operator,number1,number2);
        number2 = null;
        operator = null;
        updateDisplay(number1);
        pressedEquals = true;
    } else if (
        clear.includes(input))
    {
        allClear();
    } else if (
        equals.includes(input) &&
        !number2 &&
        !operator)
    {
        //do nothing
    } else if (
        pressedEquals === true &&
        number1 &&
        !number2 &&
        !operator)
        {
            allClear();
            number1 = input;
            updateDisplay(number1);
            pressedEquals = false;
        }

    function updateDisplay(input){
        if (input){
            display.textContent = input;
        } else {
            display.innerHTML = "";
        }
    }

    function allClear(){
        number1 = null;
        number2 = null;
        operator = null;
        updateDisplay();
    }
}



createEventListeners();