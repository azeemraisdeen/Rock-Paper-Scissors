console.log("Hello Azeem!, how are you?")

function getComputerChoice() {
    const values = ["rock", "paper", "scissor"]
    let index = Math.floor(Math.random() * 3)
    let choice = values.at(index)
    return choice
}

function getHumanChoice(){
    let humanChoice = prompt("What's your choice? ")
    humanChoice = humanChoice.toLowerCase()
    return humanChoice
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}


// Function to update the score
function updateScore(result, score) {
    if (result === 'player') {
        score.player += 1;
    } else if (result === 'computer') {
        score.computer += 1;
    }
    // No need to update the score for a draw
}

// Main function to play the game
function playGame() {
    const score = { player: 0, computer: 0 };
    const rounds = 5;

    for (let i = 0; i < rounds; i++) {
        const playerChoice = prompt('Enter your choice (rock, paper, or scissors):').toLowerCase();
        const computerChoice = getComputerChoice();

        console.log(`Round ${i + 1}:`);
        console.log(`Player choice: ${playerChoice}`);
        console.log(`Computer choice: ${computerChoice}`);

        const result = playRound(playerChoice, computerChoice);
        
        if (result === 'player') {
            console.log('You win this round!');
        } else if (result === 'computer') {
            console.log('Computer wins this round!');
        } else {
            console.log('This round is a draw!');
        }

        updateScore(result, score);
    }

    console.log('Final Score:');
    console.log(`Player: ${score.player}`);
    console.log(`Computer: ${score.computer}`);

    if (score.player > score.computer) {
        console.log('You win the game!');
    } else if (score.player < score.computer) {
        console.log('Computer wins the game!');
    } else {
        console.log('The game is a draw!');
    }
}

// Start the game
playGame();









