console.log("Hello World")

let humanScore = 0
let computerScore = 0


function multipleChoices(choice){

    switch(choice){
        case 0:
        case "r":
        case "R":
        case "rock":
        case "ROCK":
            return "Rock";
            break;
        
        case 1:
        case "p":
        case "P":
        case "paper":
        case "PAPER":
            return "Paper";
            break;
        
        case 2:
        case "s":
        case "S":
        case "scissors":
        case "SCISSORS":
            return "Scissors";
            break;
        default:
            break;
    }
}

function getComputerChoice(){
    let randomNumber = Math.floor(Math.random() * 3)

    return multipleChoices(randomNumber)


}


function getHumanChoice(){
    let choice = prompt("Write \'r\' for Rock, \'p\' for Paper and \'s\' for Scissors")


    return multipleChoices(choice)
}


function playRound(humanChoice, computerChoice){
    
    if(
        humanChoice === "Rock" && computerChoice === "Scissors"
        ||
        humanChoice === "Scissors" && computerChoice === "Paper"
        ||
        humanChoice === "Paper" && computerChoice === "Rock"
    ){
        humanScore++
        console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}, which means that you won!`)
        console.log(`Current scores: \n Your score: ${humanScore}\n Computer score: ${computerScore}`)
    }else if(humanChoice === computerChoice){
    
        console.log("It\'s a draw!")
        console.log(`Current scores: \n Your score: ${humanScore}\n Computer score: ${computerScore}`)

    }else{
        computerScore++
        console.log(`The computer chose ${computerChoice} and you chose ${humanChoice}, which means that you lost.`)
        console.log(`Current scores: \n Your score: ${humanScore}\n Computer score: ${computerScore}`)
    }


}

function playGame(){
    for(let i = 1; i < 6; i++){
        console.log(`Round ${i}`)
        playRound(getHumanChoice(), getComputerChoice())


    }

    console.log("The rounds are done, the results are in:")
    console.log(`Your score: ${humanScore}\n Computer score: ${computerScore}`)
    if(humanScore > computerScore){
        console.log("You have won it all!")
    }else if(humanScore < computerScore){
        console.log("You have lost, the computer is the victor.")
    }else{
        console.log("At the end of it all, it's a draw!")
    }
}

playGame()
