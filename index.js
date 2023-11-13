const buttonSection = document.querySelector(".button-section");

const buttonRock = document.createElement('button');
buttonRock.textContent = "Rock";
buttonSection.appendChild(buttonRock);

const buttonPaper = document.createElement('button');
buttonPaper.textContent = "Paper";
buttonSection.appendChild(buttonPaper);

const buttonScissors = document.createElement('button');
buttonScissors.textContent = "Scissors";
buttonSection.appendChild(buttonScissors);

const buttons = document.querySelectorAll('button');

const playerScoreText = document.querySelector(".player-score");
playerScoreText.textContent = 0;
const computerScoreText = document.querySelector(".computer-score");
computerScoreText.textContent = 0;

let scorePlayer = 0;
let scoreComputer = 0;

const playerChoice = document.querySelector(".player-choice");
const computerChoice = document.querySelector(".computer-choice");

buttons.forEach((button) => {
    button.classList.add("btn");
    button.addEventListener('click', () => {
        playGame(button.textContent);
    });
});


function getRandNum() {
    return Math.floor((Math.random() * 3) + 1);
}

function getComputerChoice() {
    let num = getRandNum();
    let choice = "";

    switch(num) {
        case 1: 
            choice = "rock";
            break;
        case 2: 
            choice = "paper";
            break;
        case 3:
            choice = "scissors";
    }
    return choice;
}

function compareChoices(playerSelection, computerSelection) {
    let choices = ["rock", "paper", "scissors"];
    let playerIndex = choices.indexOf(playerSelection);
    let computerIndex = choices.indexOf(computerSelection);

    playerChoice.style.backgroundSize = "100%";
    computerChoice.style.backgroundSize = "100%";

    switch(computerSelection) {
        case 'rock':
            computerChoice.style.backgroundImage = "url('rock.png')";
            break;

        case 'paper':
            computerChoice.style.backgroundImage = "url('paper.png')";
            break;

        case 'scissors':
            computerChoice.style.backgroundImage = "url('scissors.png')";
            break;
        default:
            console.log('incorrect');
    }

    switch(playerSelection) {
        case 'rock':
            playerChoice.style.backgroundImage = "url('rock.png')";
            break;

        case 'paper':
            playerChoice.style.backgroundImage = "url('paper.png')";
            break;

        case 'scissors':
            playerChoice.style.backgroundImage = "url('scissors.png')";
            break;
        default:
            console.log('incorrect');
    }

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

function updateScore(winner) {
    if(winner === "computer") {
        scoreComputer += 1;
        computerScoreText.textContent = scoreComputer;
    } else if (winner === "player") {
        scorePlayer += 1;
        playerScoreText.textContent = scorePlayer;
    } else {
        return 0;
    }
}

function playGame(textContent) {
    let playerSelection = textContent.toLowerCase();
    let computerSelection = getComputerChoice();

    let winner = compareChoices(playerSelection, computerSelection);

    updateScore(winner);

    const results = document.querySelector(".results");
    const p = document.createElement("p");

    if(scorePlayer === 5 || scoreComputer === 5) {
        if(scorePlayer > scoreComputer) {
            p.textContent = "The player wins the game";
        } else {
            p.textContent = "The computer wins the game";
        }
        results.appendChild(p);
        // reset score and score display
        scorePlayer = 0;
        scoreComputer = 0;
        playerScoreText.textContent = scorePlayer;
        computerScoreText.textContent = scoreComputer;
        playerChoice.style.backgroundImage = "url('logo.png')";
        computerChoice.style.backgroundImage = "url('logo.png')";
        p.textContent = "";
        return 0;
    }
}