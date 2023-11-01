const main = document.createElement("main");
document.body.appendChild(main);
const grid = document.createElement("div");
main.appendChild(grid);
document.querySelector("div").className = "grid";
const button = document.createElement("button");
main.appendChild(button);
button.className = "button"; 
const buttonText = document.createElement("div");
button.appendChild(buttonText);
buttonText.className = "buttonText";
buttonText.textContent = "Choose Grid Size";


button.addEventListener('click',()=>{
  const promptValue = prompt("Grid size.");
  function createGrid(cols){
    let rows = cols;
    for (let i = 0; i<rows; i++){
        for (let j = 0; j<cols; j++){
        const cell = document.createElement("div");
        grid.appendChild(cell);
        cell.className = "cell";
        cell.addEventListener('mouseover', () => {
          cell.style.backgroundColor = "grey";
        }); 
        if (promptValue){
          const numCol = promptValue;
          grid.style.gridTemplateColumns = `repeat(${numCol}, 1fr)`;
        }
        

        }
      
    } 
    
 

  }
  
  createGrid(promptValue);
})



/*cell.addEventListener('mouseover', () => {

    cell.style.backgroundColor = "rgb(28, 69, 113)";

  });

  /*cell.addEventListener('mouseout', () => {

    cell.style.backgroundColor = '';
  });*/




