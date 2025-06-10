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