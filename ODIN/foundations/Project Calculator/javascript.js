const main = document.createElement("main");
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
button.className = "button";
button.id ="button";

function createButton(button){
    let cols = 20;
    buttonGrid.removeChild(button);
    for (let i = 0; i<cols; i++){
        const button = document.createElement("button");
        buttonGrid.appendChild(button);
        button.className = `${[i]}`;
        //button.textContent = `${[i]}`;
       
        }
    }

createButton(button);

