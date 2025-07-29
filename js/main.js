// Load image resources
const machineRockImg = "./images/rock-sign.png";
const machinePaperImg = "./images/paper-sign.png";
const machineScissorsImg = "./images/scissors-sign.png";
const playerRockImg = "./images/rock-sign-2.png";
const playerPaperImg = "./images/paper-sign-2.png";
const playerScissorsImg = "./images/scissors-sign-2.png";


//Load sounds
const airBlowEffect = document.querySelector("#blow-effect");
const slashEffect = document.querySelector("#slash-effect");


let numberOfRoundsPlayed = 0;

const playerChoiceImg = document.querySelector(".player-choice-container > img");
const machineChoiceImg = document.querySelector(".machine-choice-container > img");
const gamingButtons = document.querySelectorAll(".gaming-btn");

const gameInfoDisplay = document.querySelector(".game-info-section");
const scoreDisplay = document.querySelector(".score-section");
const playerScoreText = document.querySelector("#player-score-text");
const machineScoreText = document.querySelector("#machine-score-text");

const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => {
  restartGame();
  showGamingButtons();
  showScoreDisplay();
  console.log(`${numberOfRoundsPlayed}  rounds played`);
  slashEffect.play();
  hideChoiceImages();
  playBtn.style.visibility = "hidden";
  resetGameInfoDisplay();
}
);


// Create a function to generate the machine's choice
function chooseForMachine() {
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



function isDraw(playerChoice, computerChoice) {
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


let playerScore = 0;
let machineScore = 0;

// When the page opens
// Generate machine choice and get user choice
let machineChoice, userChoice;
hideGamingButtons();
hideScoreDisplay();


// Use event delegation to handle click on user selection - Targets the img element of the buttons
gamingButtons.forEach((gamingButton) => {
  gamingButton.addEventListener("click", (event) => {
    console.log("I was clicked as button");
    numberOfRoundsPlayed += 1;
    showPlayButton();
    let target = event.target;
    userChoice = target.id;
    console.log("Button clicked");
    machineChoice = chooseForMachine().toLowerCase();

    switch (userChoice) {
      case "rock":
        console.log("user has clicked roockk")
        playerChoiceImg.setAttribute("src", playerRockImg);
        displayMachineChoice();
        break;

      case "paper":
        playerChoiceImg.setAttribute("src", playerPaperImg);
        displayMachineChoice();
        break;

      case "scissors":
        playerChoiceImg.setAttribute("src", playerScissorsImg);
        displayMachineChoice();
        break;

      default:
        console.log("No selection made");
    }
   
    // Sound effect with error handling
    airBlowEffect.pause();
    airBlowEffect.currentTime = 0;
    airBlowEffect.play().catch(error => {
      console.error("Playback failure: ", error)
  });

    animateChoices();
    showChoiceImages();
    showPlayButton();



    console.log(`Machine chooses ${machineChoice}. User chooses ${userChoice}`);

    if (isDraw(userChoice, machineChoice)) {
      console.log("Draw 🤭");
      resetGameInfoDisplay();
      gameInfoDisplay.classList.add("orange-text")
      gameInfoDisplay.textContent = "Draw 🤭"
    } else if (userWon(userChoice, machineChoice)) {
      playerScore += 1;
      console.log("You won! Hurray! 🥳");
      resetGameInfoDisplay();
      gameInfoDisplay.classList.add("green-text")
      gameInfoDisplay.textContent = "You won! 🥳"
    } else {
      machineScore += 1;
      console.log("You lost! 😜");
      resetGameInfoDisplay();
      gameInfoDisplay.classList.add("red-text")
      gameInfoDisplay.textContent = "You lost! 😜";
    }
 
    playerScoreText.textContent = playerScore;
    machineScoreText.textContent = machineScore;
    console.log(`${playerScore} points for user.....${machineScore} points for machine. ${numberOfRoundsPlayed} 
      rounds so far`);

  })
});

function displayMachineChoice() {
  switch (machineChoice) {
    case "rock":
      machineChoiceImg.setAttribute("src", machineRockImg);
      break;

    case "paper":
      machineChoiceImg.setAttribute("src", machinePaperImg);
      break;

    case "scissors":
      machineChoiceImg.setAttribute("src", machineScissorsImg);
      break;
  }
}


function animateChoices() {
  playerChoiceImg.classList.remove("player-rotate")
  machineChoiceImg.classList.remove("machine-rotate");
  playerChoiceImg.offsetWidth;
  machineChoiceImg.offsetWidth;
  playerChoiceImg.classList.add("player-rotate");
  machineChoiceImg.classList.add("machine-rotate");
}

function resetGameInfoDisplay() {
  gameInfoDisplay.classList.remove("orange-text");
  gameInfoDisplay.classList.remove("green-text");
  gameInfoDisplay.classList.remove("red-text");
  gameInfoDisplay.offsetWidth;
  gameInfoDisplay.textContent = "";
}

function restartGame() {
  numberOfRoundsPlayed = 0;
  initializeScores();
}

function showChoiceImages() {
  machineChoiceImg.style.visibility = "visible";
  playerChoiceImg.style.visibility = "visible";
}

function hideChoiceImages() {
  machineChoiceImg.style.visibility = "hidden";
  playerChoiceImg.style.visibility = "hidden";
}

function showGamingButtons() {
  gamingButtons.forEach(button => button.style.visibility = "visible");

}

function hideGamingButtons() {
  gamingButtons.forEach(button => button.style.visibility = "hidden");
}

function showPlayButton() {
  if (numberOfRoundsPlayed > 0) {
    playBtn.textContent = "Restart Game";
  } else {
    playBtn.textContent = "Begin Game";
  }
  playBtn.style.visibility = "visible";

}

function hidePlayButton() {
  playBtn.style.visibility = "hidden";
}

function hideScoreDisplay() {
  scoreDisplay.style.visibility = "hidden";
}

function showScoreDisplay() {
  scoreDisplay.style.visibility = "visible";
}

function initializeScores () {
  playerScoreText.textContent = 0;
  machineScoreText.textContent = 0;
  playerScore = 0;
  machineScore = 0;
}