// Create a function to generate the machine's choice
function choose() {
  // Generate random number between 1 and 3
  const randomNum = Math.floor(Math.random() * 3 + 1);

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

// Function to check for draw
function draw(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return true;
  } else {
    return false;
  }
}

// Function to check if the user won
function userWon(playerChoice, computerChoice) {
  // No worries...variables in functions have local scope
  if (playerChoice == "rock") {
    // We can also use the AND operator but this feels more intuitive to me
    if (computerChoice == "scissors") {
      return true;
    } else return false; // We already checked for draw so only two cases remain - scissors and paper
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      return true;
    } else return false; // next obvious option
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      return true;
    } else return false;
  }
}


let userScore = 0;
let machineScore = 0;

// Play a round and display the winner
function playRound() {
  // Generate machine choice and get user choice
  let userChoice, machineChoice;
  machineChoice = choose().toLowerCase();
  userChoice = prompt("Rock, Paper, or Scissors?").toLowerCase();
  let properChoice = (userChoice === "rock") || (userChoice === "paper") || (userChoice === "scissors") // Proper choices 

  while(!properChoice) {
    userChoice = prompt("Come on! Rock, Paper, or Scissors?"); // Make sure user enters proper choice
  }
  
  console.log(`Machine chooses ${machineChoice}. User chooses ${userChoice}`);

  if (draw(userChoice, machineChoice)) {
    console.log("Draw 🤭");
  } else if (userWon(userChoice, machineChoice)) {
    userScore += 1;
    console.log("You won! Hurray! 🥳");
  } else {
    machineScore += 1;
    console.log("You lost! 😜");
  }
}

function playGame(numOfRounds) {
  // Play n rounds
  // Variables to keep the user and machine score initialized to 0
  for (let i = 1; i <= numOfRounds; i++) {
    playRound();
  }

  console.log(`User score: ${userScore} | Machine score: ${machineScore}`)
}

function clearScore() {
    userScore = 0;
    machineScore = 0;
}


let numOfRounds = prompt("How many rounds do you want to play?");
// Convert to integer number
numOfROunds = parseInt(numOfRounds);
playGame(parseInt(numOfRounds));
clearScore();
