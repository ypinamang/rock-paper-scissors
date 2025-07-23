// Create a function to generate the machine's choice
function choose() {
    // Generate random number between 1 and 3 
    const randomNum = Math.floor((Math.random() * 3) + 1);

    // Convert random number to rock, paper, or scissors 
    if (randomNum == 1) {
        return "Rock";
    } else if (randomNum == 2) {
        return "Paper";
    } else {
        return "Scissors"; // only obvious option left
    }
}

// test out function choose() --> Should print Rock, Paper, or Scissors:
// console.log(choose());

let userChoice, machineChoice;

// Generate machine choice and get user choice
machineChoice = choose().toLowerCase();
userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();

/* 
Up to this point, everything works as promised..but..
Let's convert the choice values to lowerCase for better
data handling. DONE with .toLowerCase()^^^
*/

// Test it here:
console.log(`Machine chooses ${machineChoice}. User chooses ${userChoice}`);
// All good

// Variables to keep the user and machine score initialized to 0
let userScore = 0;
let machineScore = 0;

// Function to check for draw
function draw(playerChoice, computerChoice) {
    if (playerChoice == computerChoice) {
        return true; 
    } else {
        return false;
    }
} 

// Function to check if the user won
function userWon(playerChoice, computerChoice) { // No worries...variables in functions have local scope
    if (playerChoice == "rock") { // We can also use the AND operator but this feels more intuitive to me
        if (computerChoice == "scissors") {
            return true;
        } else return false; // We already checked for draw so only two cases remain - scissors and paper
    } else if (playerChoice == "paper") {
        if (computerChoice == "rock") {
            return true;
        } else return false;  // next obvious option
    } else if (playerChoice == "scissors") {
        if (computerChoice == "paper") {
            return true
        } else return false;
    }
}

// Function to play a round
function playRound() {
    // First check if it was a draw. Then check if the user won. 
    // If the user won, then the machine lost.
    if (draw(machineChoice, userChoice)) {
        console.log("Draw");
    } else if (userWon(machineChoice, userChoice)) {
        userScore += 1;
        console.log("You won! Hurray! 🥳");
    } else {
        machineScore += 1;
        console.log("You lost! 😜")
    }
}
