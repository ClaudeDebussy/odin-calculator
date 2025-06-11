let number1 = 0;
let number2 = 0;
let operator = '';

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

function operate(operator,number1,number2){
    switch(operator){
        case "plus":
            add(number1,number2);
            break;
        case "minus":
            subtract(number1,number2);
            break;
        case "times":
            multiply(number1,number2);
            break;
        case "dividedBy":
            divide(number1,number2);
            break;
        default:
            console.log("Error in operate().");
    }
}

function createEventListeners(){
    const allButtons = document.querySelectorAll(
        "#zero","#one","#two","#three","#four",
        "#five", "#six", "#seven", "#eight", "#nine", 
        "#clear", "#del", "#point", "#equals",
        "#divideBy", "#times", "#minus", "#plus"
    )

    const zeroButton = document.getElementById("zero");
    zeroButton.addEventListener("click", takeInput(0));

    const oneButton = document.getElementById("one");
    oneButton.addEventListener("click", takeInput(1));

    const twoButton = document.getElementById("two");
    twoButton.addEventListener("click", takeInput(2));

    const threeButton = document.getElementById("three");
    threeButton.addEventListener("click", takeInput(3));

    const fourButton = document.getElementById("four");
    fourButton.addEventListener("click", takeInput(4));

    const fiveButton = document.getElementById("five");
    fiveButton.addEventListener("click", takeInput(5));

    const sixButton = document.getElementById("six");
    sixButton.addEventListener("click", takeInput(6));

    const sevenButton = document.getElementById("seven");
    sevenButton.addEventListener("click", takeInput(7));

    const eightButton = document.getElementById("eight");
    eightButton.addEventListener("click", takeInput(8));

    const nineButton = document.getElementById("nine");
    nineButton.addEventListener("click", takeInput(9));

    const clearButton = document.getElementById("clear");
    clearButton.addEventListener("click", takeInput("clear"));
    
    const delButton = document.getElementById("del");
    delButton.addEventListener("click", takeInput("del"));

    const pointButton = document.getElementById("point");
    pointButton.addEventListener("click", takeInput("point"));

    const equalsButton = document.getElementById("equals");
    equalsButton.addEventListener("click", takeInput("equals"));

    const divideByButton = document.getElementById("divideBy");
    divideByButton.addEventListener("click", takeInput("divideBy"));

    const timesButton = document.getElementById("times");
    timesButton.addEventListener("click", takeInput("times"));

    const minusButton = document.getElementById("minus");
    minusButton.addEventListener("click", takeInput("minus"));

    const plusButton = document.getElementById("plus");
    plusButton.addEventListener("click", takeInput("plus"));
}