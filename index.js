function getRandNum() {
    return Math.floor((Math.random() * 3) + 1);
}

function getComputerChoice() {
    let num = getRandNum();
    let computerChoice = "";

    switch(num) {
        case 1: 
            computerChoice = "rock";
            break;
        case 2: 
            computerChoice = "paper";
            break;
        case 3:
            computerChoice = "scissors";
    }
    return computerChoice;
}

function getUserChoice() {
    let userChoice = prompt("Enter your choice: rock, paper, or scissors?");
    userChoice.toLowerCase();

    if(userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
        console.log("incorrect choice, try again");
    }
    else {
        return userChoice;
    }
}

function compareChoices(playerSelection, computerSelection) {
    let choices = ["rock", "paper", "scissors"];
    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    console.log(`The player selected: ${playerSelection}`);
    console.log(`The computer selected: ${computerSelection}`);

    if (playerIndex === computerIndex) {
        return "tie";
    } else {
        if((playerIndex + 1) % 3 === computerIndex) {
            return "computer";
        } else {
            return "player";
        }
    }
}

function playGame() {
    let playerSelection = getUserChoice();
    let computerSelection = getComputerChoice();

    let winner = compareChoices(playerSelection, computerSelection);
    if(winner === "tie") {
        console.log("The game ends in a tie!");
    } else {
        console.log("The games end with the winner being the: " + winner);
        return winner;
    }
}

let playerScore = 0;
let computerScore = 0;

for(let i = 0; i <= 5; i++) {
    let winner = playGame();

    if(winner === "player") {
        playerScore += 1;
    } else if (winner === "computer") {
        computerScore += 1;
    }
    console.log(`Scores: player score: ${playerScore} - computer score: ${computerScore}`);
    
    if(i === 5) {
        console.log(`The final score is player score: ${playerScore} to computer score : ${computerScore}`);
    }
}