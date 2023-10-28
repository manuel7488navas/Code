
function getComputerChoice(){   
    let gests = ["rock", "paper", "scissors"];
    return gests[(Math.floor(Math.random()*gests.length))]
}



function game(playerSelection, computerSelection){

 computerSelection = getComputerChoice();
 playerSelection = prompt("Choose your fighter!!!").toLowerCase();

    if (playerSelection === "rock" && computerSelection === "scissors"){
        return alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection === "rock" && computerSelection === "paper"){
        return  alert(`You lose. ${computerSelection} beats ${playerSelection}`);
    }else if (playerSelection === "rock" && computerSelection === "rock"){
        return  alert("It´s a tie!!!.");
    }else if (playerSelection === "paper" && computerSelection === "scissors"){
        return  alert(`You lose. ${computerSelection} beats ${playerSelection}`);
    }else if (playerSelection === "paper" && computerSelection === "paper"){
        return  alert("It´s a tie!!!.");
    }else if (playerSelection === "paper" && computerSelection === "rock"){
        return  alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection === "scissors" && computerSelection === "scissors"){
        return  alert("It´s a tie!!!.");
    }else if (playerSelection === "scissors" && computerSelection === "paper"){
        return  alert(`You win! ${playerSelection} beats ${computerSelection}`);
    }else if (playerSelection === "scissors" && computerSelection === "rock"){
        return  alert(`You lose. ${computerSelection} beats ${playerSelection}`);
    }else if (playerSelection === ""){
        return  alert("SAY SOMETHING.");
    }




}
for (let i = 100; i >=0; i--){
     game();
}



