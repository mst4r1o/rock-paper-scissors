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
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        results.innerText = "It's a tie! You both chose " + playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length);
        return 0.5;
    } else if (playerSelection === "rock" && computerSelection === "scissors"
    || playerSelection === "paper" && computerSelection === "rock"
    || playerSelection === "scissors" && computerSelection === "paper") {
        results.innerText = `You win! ${playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)}`;
        return 1;
    } else {
        results.innerText = `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1, computerSelection.length)} beats ${playerSelection[0].toUpperCase() + playerSelection.slice(1, playerSelection.length)}`; 
        return 0;
    }
}

const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");
let playerPoint = 0;
let comPoint = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        let point = playRound(button.value, getComputerChoice());
        if (point === 1) playerPoint++;
        if (point === 0) comPoint++;
        results.innerText += `\nPlayer: ${playerPoint} | Computer: ${comPoint}`;

        if (playerPoint === 5 || comPoint === 5) results.innerText += `\n${playerPoint === 5 ? "Player" : "Computer"} wins!`;

    })
});




// function playGame() {
//     let score = 0;
//     for (let i = 0; i < 5; i++) {
//         score += playRound(prompt("What would you like to choose?"), getComputerChoice());
//     }

//     if (score >= 3) {
//         console.log("You win!");
//     } else if (score === 2.5) {
//         console.log("It's a tie!");
//     } else {
//         console.log("You lost!");
//     }
// // }

// playGame();