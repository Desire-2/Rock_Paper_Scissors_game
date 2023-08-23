function getComputerChoice() {
    const choices = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase(); // Make player input case-insensitive
    if (playerSelection === computerSelection.toLowerCase()) {
        return "It's a tie!";
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'Scissors') ||
        (playerSelection === 'paper' && computerSelection === 'Rock') ||
        (playerSelection === 'scissors' && computerSelection === 'Paper')
    )
    {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

  }

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

  function game() {
    let playerScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter your choice (Rock/Paper/Scissors):");
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(result);
  
        if (result.includes('Win')) {
            playerScore++;
        }
        else if (result.includes('Lose')) {
            computerScore++;
        }
    }
  
    if (playerScore > computerScore) {
        console.log("Congratulations! You win the game!");
    }
    else if (computerScore > playerScore) {
        console.log("Sorry, you lose the game.");
    }
    else {
        console.log("It's a tie!");
    }
  }
  
  game();
  