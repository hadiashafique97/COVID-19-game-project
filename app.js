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
const modalContainer = document.querySelector('.modal-container')
const modal = document.querySelector(".modal")
const closeButton = document.querySelector(".close-button")
const modalPlay = document.querySelector(".modal-ok")

newGameButton.addEventListener('click', startANewGame)

function startANewGame() {

    myPlayerScore = 0
    theEnemyScore = 0
    result.innerHTML = "Let'\s reset the Scoreboard and start fresh!!"
    grabPlayerScore.innerHTML = myPlayerScore
    grabEnemyScore.innerHTML = theEnemyScore
    playerDisplay.innerHTML = `Make your move`
    enemyDisplay.innerHTML = ``

}

let myModalCommands = {
    toggleModal() {
        modalContainer.classList.remove('hide') 
    },
    closeModal() {
        modalContainer.classList.add('hide')
    },
}
myModalCommands.closeModal()
setTimeout(() => { myModalCommands.toggleModal() }, 1000)// to prompt the modal when page loads 
// window.addEventListener("load", myModalCommands.toggleModal)
modalPlay.addEventListener("click", myModalCommands.closeModal)
closeButton.addEventListener("click", myModalCommands.closeModal)

function getResults() {
    setTimeout(() => { playerDisplay.innerHTML = ` ${playerChoice}` }, 100)
    setTimeout(() => { enemyDisplay.innerHTML = `${enemyChoice}` }, 100)
    if (enemyChoice === playerChoice) {
        setTimeout(() => { tie() }, 600)
        setTimeout(() => { result.innerHTML = `It's a Tie! ${playerChoice} is equal to ${enemyChoice}` }, 600)
    }
    if (enemyChoice === 'human' && playerChoice === 'virus') {
        setTimeout(() => { win() }, 600)
        setTimeout(() => { result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! ` }, 600)
    }
    if (enemyChoice === 'human' && playerChoice === 'vaccine') {
        setTimeout(() => { lose() }, 600)
        setTimeout(() => { result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! ` }, 600)
    }
    if (enemyChoice === 'virus' && playerChoice === 'vaccine') {
        setTimeout(() => { win() }, 600)
        setTimeout(() => { result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! ` }, 600)
    }
    if (enemyChoice === 'virus' && playerChoice === 'human') {
        setTimeout(() => { lose() }, 600)
        setTimeout(() => { result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! ` }, 600)
    }
    if (enemyChoice === 'vaccine' && playerChoice === 'human') {
        setTimeout(() => { win() }, 600)
        setTimeout(() => { result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! ` }, 600)
    }
    if (enemyChoice === 'vaccine' && playerChoice === 'virus') {
        setTimeout(() => { lose() }, 600)
        setTimeout(() => { result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! ` }, 600)
    }
}
function gameRound() {
    myButtons.forEach(option => option.addEventListener('click', (e) => {
        playerChoice = e.target.id // so whatever i click i get the target id
        generateEnemyChoice()
        getResults()
        changeTheBorder(playerChoice)

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





