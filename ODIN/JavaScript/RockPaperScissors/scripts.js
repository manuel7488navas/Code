
function getComputerChoice(){   
    let gests = ["rock", "paper", "scissors"];
    return gests[(Math.floor(Math.random()*gests.length))]
}



function game(playerSelection, computerSelection){

 computerSelection = getComputerChoice();
 playerSelection = prompt("Choose your fighter!!!");
    
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return alert("You win!!!");
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return  alert("You loose.");
    }else if (playerSelection === "rock" && computerSelection === "rock"){
        return  alert("It´s a tie!!!.");
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return  alert("You loose.");
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        return  alert("It´s a tie!!!.");
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return  alert("You win!!!");
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return  alert("It´s a tie!!!.");
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return  alert("You win!!!");
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return  alert("You loose.");
    }else if (playerSelection === ""){
        return  alert("SAY SOMETHING.");
    }



}
for (let i = 5; i >=0; i--){
    prompt(game());
}





