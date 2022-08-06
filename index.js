// Main Variables

// game function 

function game() {
    // Main variables 

    const rock = "rock"
    const paper = "paper"
    const scrsisors = "scrissors"

    // Player choice 

    let playerAnswer = prompt("Rock, paper or scrissors:")    
    console.log(playerAnswer)

    // Robot Deck and choice

    RobotDeck = ["rock","paper","scrissors"]
    let i = Math.floor(Math.random() * 3)
    let robotAnswer = RobotDeck[i]
    console.log(robotAnswer)
    
    // See who is the winner

    let winner
    if (playerAnswer === "rock") {
        winner = robotAnswer === "paper" ? "Robot wins" : robotAnswer === "scrissors" ? "You win" : "draw"
        console.log(winner)
    } else if (playerAnswer === "paper") {
        winner = robotAnswer === "rock" ? "You win" : robotAnswer === "scrissors" ? "Robot wins" : "draw"
        console.log(winner)
    } else if (playerAnswer === "scrissors") {
        winner = robotAnswer === "rock" ? "Robot wins" : robotAnswer === "paper" ? "You win" : "draw"
        console.log(winner)
    } 
}


game()