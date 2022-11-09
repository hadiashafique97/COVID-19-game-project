const playerDisplay = document.getElementById('player-display')
const enemyDisplay = document.getElementById('enemy-display')
const newGameButton = document.querySelector('#new-game-button')
const human = document.getElementById('human') // my rock
const vaccine = document.getElementById('vaccine') // my paper
const virus = document.getElementById('virus') // scissors
let result = document.querySelector('.result') // this is the paragraph on the screen
let myPlayerScore = 0 //  player actual score on scoreboard
let theEnemyScore = 0 // computers actual score score on scoreboard
const grabPlayerScore = document.getElementById("myplayer-score") //grabbing my players score
const grabEnemyScore = document.getElementById("enemy-score") //grabbing enemy score
let allOptions = document.querySelectorAll('.all-options')
let myButtons = document.querySelectorAll('.button-container') // all of the options you can select fixed to now only the pictures click 
const scoreBoard = document.querySelector('.score-board') // grabs my scoreboard
let playerChoice
let enemyChoice
let randomNumber 

newGameButton.addEventListener('click', startANewGame)

function startANewGame() {

    myPlayerScore = 0
    theEnemyScore = 0
    result.innerHTML = "Let'\s start a new game"
    grabPlayerScore.innerHTML = myPlayerScore
    grabEnemyScore.innerHTML = theEnemyScore
    playerDisplay.innerHTML = `Player Make your first move`
    enemyDisplay.innerHTML = ``

}

function getResults() {
    playerDisplay.innerHTML = ` ${playerChoice}`
    enemyDisplay.innerHTML = `${enemyChoice}`
    if (enemyChoice === playerChoice) {
        tie()
        result.innerHTML = `It's a Tie! ${playerChoice} is equal to ${enemyChoice}`
    }
    if (enemyChoice === 'human' && playerChoice === 'virus') {
        win()
        result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! `
    }
    if (enemyChoice === 'human' && playerChoice === 'vaccine'){
        lose()
        result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! `
    }
    if (enemyChoice === 'virus' && playerChoice === 'vaccine') {
        win()
        result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! `
    }
    if(enemyChoice === 'virus' && playerChoice === 'human'){
        lose()
        result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! `
    }
    if (enemyChoice === 'vaccine' && playerChoice === 'human') {
        win()
        result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! `
    }
    if(enemyChoice === 'vaccine' && playerChoice === 'virus'){
        lose()
        result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! `
    }
}
function gameRound() {
    //running my battles??
    myButtons.forEach(option => option.addEventListener('click', (e) => {
        playerChoice = e.target.id // so whatever i click i get the target id
        generateEnemyChoice()
        getResults()

    }))
}
gameRound()

function generateEnemyChoice() {
    randomNumber = Math.floor(Math.random() * 3) // randomizing for the length of the all option
    if (randomNumber === 0) {
        enemyChoice = human.id
    }
    if (randomNumber === 1) {
        enemyChoice = vaccine.id
    }
    if (randomNumber === 2) {
        enemyChoice = virus.id
    }
    console.log(enemyChoice)
}

function win() {
    myPlayerScore++
    grabPlayerScore.innerHTML = myPlayerScore
    grabEnemyScore.innerHTML = theEnemyScore
    console.log(myPlayerScore)
}
function lose() {
    theEnemyScore++
    grabEnemyScore.innerHTML = theEnemyScore
    grabPlayerScore.innerHTML = myPlayerScore

}
function tie() {
    grabEnemyScore.innerHTML = theEnemyScore
    grabPlayerScore.innerHTML = myPlayerScore
}


// add what the enemy picks 
