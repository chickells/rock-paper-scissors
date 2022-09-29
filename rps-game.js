// ROCK PAPER SCISSORS PROJECT

// initial declarations
const answers = ["rock", "paper", "scissors"]
let result = ""
let userScore = 0
let pcScore = 0
let round = 1

// pulls randomly from answers[]
function getComputerChoice() {
    return answers[Math.floor(Math.random() * 3)];
}

// targeting buttons
const btns = document.querySelectorAll(".btn")
const restart = document.querySelector('.restart')

// assigns listener per button to start round with that as userChoice
btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        playRound(userChoice = e.currentTarget.id)
    })
})

function playRound () {  
    // generate pcChoice and check against userChoice
    let pcChoice = getComputerChoice();       
    
    if (userChoice === pcChoice) {
        result = "It's a tie!";
    } 
    else if (userChoice == "rock") {
        if (pcChoice == "paper"){
            result = "Paper beats rock. You lose!";
            pcScore++;
            } else {result = "Rock beats scissors.  You win!";
            userScore++;
    }} 
    else if (userChoice == 'paper') {
        if (pcChoice == 'rock') {
            result = 'Paper beats rock.  You win!';
            userScore++;
            } else {result = 'Scissors beats paper.  You lose!';
            pcScore++;
    }}
    else if (userChoice == 'scissors') {
        if (pcChoice == 'rock') {
            result = 'Rock beats scissors.  You lose!'
            pcScore++;
            } else {result = 'Scissors beats paper.  You win!';
            userScore++;
    }} else if (userChoice != "rock" || "paper" || "scissors") {
            result = "Error: please enter a valid answer!";
            round--;
    }
    // display result and update score
    document.querySelector('.result').textContent = result
    checkScore();
}

// if either score is 5, trigger gameOver otherwise update scores

function checkScore() {
    if (userScore === 5 || pcScore === 5) {
        document.querySelector(".user-score").textContent = userScore
        document.querySelector(".pc-score").textContent = pcScore
        gameOver();
    } else {
        document.querySelector(".user-score").textContent = userScore
        document.querySelector(".pc-score").textContent = pcScore
    }
}

// hides original buttons and shows reset button

function gameOver() {
    document.querySelector('.title').textContent = "GAME OVER"
    restart.classList.remove('hide') 
    btns.forEach(function (urmom) {
        urmom.classList.add('hide');
    })        
}

// resets original text contents and scores
// is there a straight up 'reset' method to refresh everything on page to default values?

restart.addEventListener('click', function (e) {
    document.querySelector('.title').textContent = "Choose Your Weapon"
    restart.classList.add('hide') 
    btns.forEach(function (urmom) {
        urmom.classList.remove('hide');
    }); 
    result = "";
    userScore = 0;
    pcScore = 0;
    document.querySelector('.result').textContent = result
    document.querySelector(".user-score").textContent = userScore
    document.querySelector(".pc-score").textContent = pcScore
})