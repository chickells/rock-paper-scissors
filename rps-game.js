


const answers = ["rock", "paper", "scissors"]
let result = ""

function getComputerChoice() {
    return answers[Math.floor(Math.random() * 3)];
}

const rBtn = document.querySelector(".rock")
const pBtn = document.querySelector(".paper")
const sBtn = document.querySelector(".scissors")
const btns = document.querySelectorAll(".btn")
let newUserChoice = ""

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        newUserChoice = e.currentTarget.id;
        playRound(userChoice = newUserChoice)
    })
})

// let pcChoice = getComputerChoice();
// let userChoicePrompt = prompt("Rock, Paper, or Scissors?")
// let userChoice = userChoicePrompt.toLowerCase()
// chose to put this inside the round so that each
// new round would prompt the user for a new answer

let userScore = 0
let pcScore = 0
let round = 1

function playRound () {  
    let pcChoice = getComputerChoice();
    // let userChoicePrompt = prompt("Rock, Paper, or Scissors?");
    // let userChoice = userChoicePrompt.toLowerCase();          
    
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

    alert(`--- Round ${round} of 5 ---` + "\n" + 
        `User: ${userChoice}` + `\n` + 
        `PC: ${pcChoice}` + `\n` + 
        result + "\n" + "\n" + 
        "Score:" + "\n" + 
        `You: ${userScore}` + "\n" + 
        `PC: ${pcScore}`);
    
}

function game() {
    // using ROUND instead of i, this lets me modify
    // the round within the PLAYROUND function
    // incase user supplies an invalid answer
    // and the round needs to be replayed
    // LFG
    for (round; round<6; round++) {
        playRound();
    }
    alert("GAME OVER"
    + "\n" + "\n" + 
    "Score:" + "\n" + 
    `You: ${userScore}` + "\n" + 
    `PC: ${pcScore}`);            
}

       











       // PLAY ROUND WORKS PERFECTLY (was missing brackets per "else" which added score
       // when i didn't mean to)

       // NOW TIME TO BUILD THE "FOR" LOOP TO PLAY THE GAME UP TO A SCORE OF 5, LFG
       // goal for today's off session, FINISH the loop.  start the UI?

       // i think i am starting to understand how this all wraps into web dev tho
       // in real life i'd start using "document.querySelector(etc)" to target
       // elements on the page and update them via my js script
       // IT'S KINDA COOL NGL, it's becoming less fucking lame lmao


        // PREVIOUS MID PROJECT NOTES:
        // sooo for whatever reason when i pass in playRound(userChoice, pcChoice)
        // IT DOESN'T FUCKING WORK, they are ALWAYS equal. makes no fucking sense tbh.
        // but when I leave parameters blank it actually works
        // is it because I'm calling them the same name as globally defined variables?
        // idk

        // using this reference
        // https://www.geeksforgeeks.org/rock-paper-and-scissor-game-using-javascript/