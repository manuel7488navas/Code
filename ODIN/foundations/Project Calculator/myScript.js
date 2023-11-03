let a;
let b;
let operator;

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a - b;
}

function multiply(a,b){
    return a*b;
}
 
function divide(a,b){
    if (b === 0){
        return "you can´t divide by 0";
    }
        return a/b;
}



function operate(operator,a,b){
    switch (operator){
        case 'add':
            return add(a, b);
        case 'subtract':
            return subtract(a, b);
        case 'multiply':
            return multiply(a, b);
        case 'divide':
            return divide(a, b);
        default:
            return "Wrong operator";
    }
}


console.log(operate('multiply',2,3))



const display = document.querySelector('.display');
const buttons = document.querySelectorAll('.button');

let value = '';


buttons.forEach(button => {
  button.addEventListener('click', () => {
    value = button.id;
    display.textContent = value;

  });
  
});





















/*const main = document.createElement("main");
document.body.appendChild(main);

const calculator = document.createElement("div");
main.appendChild(calculator);
calculator.className ="calculator";

const screen = document.createElement("div");
calculator.appendChild(screen);
screen.className = "screen";

const buttonGrid = document.createElement("div");
calculator.appendChild(buttonGrid);
buttonGrid.className = "buttonGrid";

const button = document.createElement("button");
buttonGrid.appendChild(button);
button.className = "CE";
button.id ="CE";
CE.textContent = "CE";

const button1 = document.createElement("button");
buttonGrid.appendChild(button1);
button1.className = "C";
button1.id ="C";
C.textContent = "C";



function createButton(button){
    let cols = 20;
    buttonGrid.removeChild(button);
    for (let i = 0; i<cols; i++){
        const button = document.createElement("button");
        buttonGrid.appendChild(button);
        button.className = `${"abcdefghijklmnopqrst"[i]}`;
        //button.textContent = `${[i]}`;
       
        }
    }

createButton(button);

//document.querySelector(a).textContent = "CE"*/