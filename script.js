function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    let computerChoice;
    switch(randomNum) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    console.log(playerSelection, computerSelection)
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie! You both chose " + playerSelection;
    } else if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
        return `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)}`;
    } else {
        return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length)}`; 
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));