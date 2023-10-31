const main = document.createElement("main");
document.body.appendChild(main);
const container = document.createElement("container");
main.appendChild(container);
const grid = document.createElement("div");
container.appendChild(grid);
document.querySelector("div").className = "grid";


for (let i = 0; i<16; i++){
    for (let j = 0; j<16; j++){
const cell = document.createElement("div");
grid.appendChild(cell);
cell.className = "cell"; 

cell.addEventListener('mouseover', () => {

    cell.style.backgroundColor = "rgb(28, 69, 113)";

  });

  cell.addEventListener('mouseout', () => {

    cell.style.backgroundColor = '';
  });
}
}

const button = document.createElement("button");
main.appendChild(button);
button.className = "button"; 


