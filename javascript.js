//html dom

let btnRock = document.querySelector("#rock")
let btnPaper = document.querySelector("#paper")
let btnScissors = document.querySelector("#scissors")

let resultTitle = document.createElement("p")
let resultPlayerComp = document.createElement("p")
let whoWins = document.createElement("p")

//eventListeners
btnRock.addEventListener("click", btnActions)
btnPaper.addEventListener("click", btnActions)
btnScissors.addEventListener("click", btnActions)

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

//helps append an undetermined number of elements to a container
function appendChildren(parentNode, ...children){
    for(let child of children){
        parentNode.appendChild(child)
    }
}

//callback function for when user chooses one of the buttons
function btnActions(){
    playRound(multipleChoices(this.id), getComputerChoice());
    finalResults();
    let divResults = document.querySelector(".results")
    appendChildren(divResults, resultTitle, resultPlayerComp, whoWins)
}

//displays final results
function finalResults(){
    resultTitle.textContent = "The rounds are done, the results are in:\n"

    resultPlayerComp.textContent = `Your score: ${humanScore}\n Computer score: ${computerScore}`

    if(humanScore >= 5 || computerScore >= 5){
        if(humanScore > computerScore){
            whoWins.textContent = "You have won it all!"
        }else if(humanScore < computerScore){
            whoWins.textContent = "You have lost, the computer is the victor."
        }else{
            whoWins.textContent = "At the end of it all, it's a draw!"
        }
    }
    
}

