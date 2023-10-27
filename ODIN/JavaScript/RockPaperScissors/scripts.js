
function getComputerChoice(){   
    let gests = ["rock", "paper", "scissors"];
    return gests[(Math.floor(Math.random()*gests.length))]
}



function game(playerSelection, computerSelection){

 computerSelection = getComputerChoice();
 playerSelection = prompt("Choose your fighter!!! ");



    
    if (playerSelection === "rock" && computerSelection === "scissors"){
        return "You win!!!";
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return "You loose.";
    }else if (playerSelection === "rock" && computerSelection === "rock"){
        return "It´s a tie!!!.";
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return "You loose.";
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        return "It´s a tie!!!.";
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return "You win!!!";
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return "It´s a tie!!!.";
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return "You win!!!";
    }else if (playerSelection === "scissors" && computerSelection === "rock")
        return "You loose.";
    } 



    





prompt(game());





