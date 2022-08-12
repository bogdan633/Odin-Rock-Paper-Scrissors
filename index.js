const loginBtn = document.querySelector(".login-btn")
const choicesImg = document.querySelectorAll(".choices-img")
const playerChoice = document.querySelector("#player-choice")
const imageClass = document.querySelector(".image")
const optionBtn = document.querySelector(".option-btn")
const optionBtns = document.querySelectorAll(".content .option-btn")
const robotChoiceValue = document.querySelector("#robot-choice")
let winnerValue = document.querySelector("#winner")
console.log(optionBtns)

RobotDeck = ["rock","paper","scrissors"]



// See who is the winner

optionBtns.forEach(item => {
    item.addEventListener('click', () => {
        let winner
        
        if (item.value === "rock") {

            let i = Math.floor(Math.random() * 3)
            let robotChoice = RobotDeck[i]

            playerChoice.textContent = "Player: " + item.value
            robotChoiceValue.textContent = "Robot: " + RobotDeck[i]

            winner = robotChoice === "paper" ? "Robot wins" : robotChoice === "scrissors" ? "You win" : "draw"
            winnerValue.textContent = winner
            
        } else if (item.value === "paper") {

            let i = Math.floor(Math.random() * 3)
            let robotChoice = RobotDeck[i]
            
            playerChoice.textContent = "Player: " + item.value
            robotChoiceValue.textContent = "Robot: " + RobotDeck[i]

            winner = robotChoice === "rock" ? "You win" : robotChoice === "scrissors" ? "Robot wins" : "draw"
            winnerValue.textContent = winner

        } else if (item.value === "scrissors") {

            let i = Math.floor(Math.random() * 3)
            let robotChoice = RobotDeck[i]

            playerChoice.textContent = "Player: " + item.value
            robotChoiceValue.textContent = "Robot: " + RobotDeck[i]

            winner = robotChoice === "rock" ? "Robot wins" : robotChoice === "paper" ? "You win" : "draw"
            winnerValue.textContent = winner
            
        } 
    })
} )