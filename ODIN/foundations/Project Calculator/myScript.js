
document.querySelector(".calculator").style.border = "solid black";
document.querySelector(".screen").style.border = "solid black";

function add(a,b){
    return a+b;
};
function subtract(a,b){
    return a-b;
};
function multiply(a,b){
    return a*b
};
function divide(a,b){
    if (b === 0){
        return "ERROR"
    }
        return a/b;
};


function operate(operator, a, b){
    switch (operator){
        case '+':
            return add(a,b);
        case '-':
            return subtract(a,b);
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
        default:
            return "ERROR";
    }   
};

let firstNum = "";
let operator = "";
let secondNum = "";

const buttons = document.querySelectorAll("button");
buttons.forEach((button)=>{
    button.addEventListener('click', (event)=>{
        const digit =event.target.textContent;
        handleDigitClick(digit);
    });
});

