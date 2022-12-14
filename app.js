//#region global variables 
const playerDisplay = document.getElementById('player-display') // players choice
const enemyDisplay = document.getElementById('enemy-display') // enemy choice 
const newGameButton = document.querySelector('#new-game-button') //the new game button 
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
const roundLimit = 15
let currentRoundIndex = 0
const round = document.getElementById('sbp')
let originalModalContent = document.querySelector('.modal-content').innerHTML
//#endregion 



newGameButton.addEventListener('click', startANewGame)

function startANewGame() {
    document.querySelector('.modal-content').innerHTML = originalModalContent
    myPlayerScore = 0
    theEnemyScore = 0
    result.innerHTML = "Let'\s reset the Scoreboard and start fresh!!"
    grabPlayerScore.innerHTML = myPlayerScore
    grabEnemyScore.innerHTML = theEnemyScore
    playerDisplay.innerHTML = `Choose`
    enemyDisplay.innerHTML = ``
    currentRoundIndex = 0
    round.innerHTML = `Round:${currentRoundIndex}`
    myModalCommands.toggleModal()

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
        setTimeout(() => { tie() }, 400)
        setTimeout(() => { result.innerHTML = `It's a Tie! ${playerChoice} is equal to ${enemyChoice}` }, 400)
    }
    if (enemyChoice === 'human' && playerChoice === 'virus') {
        setTimeout(() => { win() }, 400)
        setTimeout(() => { result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! ` }, 400)
    }
    if (enemyChoice === 'human' && playerChoice === 'vaccine') {
        setTimeout(() => { lose() }, 400)
        setTimeout(() => { result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! ` }, 400)
    }
    if (enemyChoice === 'virus' && playerChoice === 'vaccine') {
        setTimeout(() => { win() }, 400)
        setTimeout(() => { result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! ` }, 400)
    }
    if (enemyChoice === 'virus' && playerChoice === 'human') {
        setTimeout(() => { lose() }, 400)
        setTimeout(() => { result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! ` }, 400)
    }
    if (enemyChoice === 'vaccine' && playerChoice === 'human') {
        setTimeout(() => { win() }, 400)
        setTimeout(() => { result.innerHTML = `Great Job, ${playerChoice} beats ${enemyChoice} YOU WIN!!!!! ` }, 400)
    }
    if (enemyChoice === 'vaccine' && playerChoice === 'virus') {
        setTimeout(() => { lose() }, 400)
        setTimeout(() => { result.innerHTML = `Sorry you LOST, ${enemyChoice} beats ${playerChoice} Better try again!! ` }, 400)
    }
}
function gameRound() {
    myButtons.forEach(option => option.addEventListener('click', (e) => {
        playerChoice = e.target.id // so whatever i click i get the target id
        generateEnemyChoice()
        getResults()
        currentRoundIndex++
        round.innerHTML = `Round:${currentRoundIndex}`
        if (currentRoundIndex >= roundLimit) {
            setTimeout(() => {gameOver()},500)
        }
    }))
}
gameRound()

function gameOver() {
    if (theEnemyScore > myPlayerScore) {
        // alert(`UH OH YOU LOST ${myPlayerScore}:${theEnemyScore} `)
        myModalCommands.toggleModal()
        document.querySelector('.modal-content').textContent =`UH OH YOU LOST ${myPlayerScore}:${theEnemyScore} `
    }
    if (myPlayerScore > theEnemyScore) {
        // alert(`YOU'RE A WINNER ${myPlayerScore}:${theEnemyScore} `)
        myModalCommands.toggleModal()
        document.querySelector('.modal-content').textContent =`YOU DID IT!!! ${myPlayerScore}:${theEnemyScore} `
        
    }
}

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





