// console.log("Hello Azeem!, how are you?")

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


function playRound(humanChoice, computerChoice){
    if (computerChoice === "rock" && humanChoice === "rock") {
        console.log("Draw!, try again.")
    }
    else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You win!")
    }
    else if (computerChoice === "rock" && humanChoice === "scissor") {
        console.log("You lose, rock beats scissor")
    }
    else if (humanChoice === "rock" && computerChoice === "rock") {
        console.log("Draw!, try again.")
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win!")
    }
    else if (humanChoice === "scissor" && computerChoice === "paper") {
        console.log("You win!")
    }
    
}


function playGame(){
    
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()



let humanScore = 0
let computerScore = 0



// console.log(getComputerChoice())
// console.log(getHumanChoice())
playRound(humanChoice, computerChoice)