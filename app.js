

let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll('.ch');
let msg = document.querySelector('#msg');
let msgContainer = document.querySelector('.msg-container');
let userScore_span = document.querySelector('#user-score');
let compScore_span = document.querySelector('#comp-score');

const genCompChoice = () => {
    const compChoices = ['rock', 'paper', 'scissors'];
    const randomNum = Math.floor(Math.random() * 3);
    return compChoices[randomNum];
}

const drawGame = (computerChoice) => {
    console.log("It's a draw!");
    msg.textContent = `It's a draw! Computer also chose ${computerChoice}, try again!`;
    msgContainer.style.backgroundColor = 'black';
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        msg.textContent = `You win! Computer chose ${computerChoice}, ${userChoice} beats ${computerChoice}`;
        msgContainer.style.backgroundColor = 'green';
        userScore++;
        userScore_span.textContent = userScore;
    }else{
        msg.textContent = `Computer wins! Computer chose ${computerChoice}, ${computerChoice} beats ${userChoice}`;
        msgContainer.style.backgroundColor = 'red';
        computerScore++;
        compScore_span.textContent = computerScore;
    }
}

const playgame = (userChoice) => {
    console.log("User choice:", userChoice);
    const computerChoice = genCompChoice();
    console.log("Computer choice:", computerChoice);   
    if (userChoice === computerChoice) {
        drawGame(computerChoice);
    }else{
        let userWin = true;
        if(userChoice === 'rock'){
            computerChoice === 'paper' ? userWin = false : userWin = true;
        }else if(userChoice === 'paper'){
            computerChoice === 'scissors' ? userWin = false : userWin = true;
        }else{
            computerChoice === 'rock' ? userWin = false : userWin = true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const userChoice = choice.id;
        playgame(userChoice);
    })
});