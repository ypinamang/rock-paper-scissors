const machineRockImg = "./images/rock-sign.png";
const machinePaperImg = "./images/paper-sign.png";
const machineScissorsImg = "./images/scissors-sign.png";
const playerRockImg = "./images/rock-sign-2.png";
const playerPaperImg = "./images/paper-sign-2.png";
const playerScissorsImg = "./images/scissors-sign-2.png";

const airBlowEffect = document.querySelector("#blow-effect");
const slashEffect = document.querySelector("#slash-effect");

const playBtn = document.querySelector("#play-btn");

const gamingButtons = document.querySelectorAll(".gaming-btn");
const gamingButtonsContainer = document.querySelector(".player-options-container");

const playerChoiceImg = document.querySelector(".player-choice-container > img");
const machineChoiceImg = document.querySelector(".machine-choice-container > img");

const gameInfoDisplay = document.querySelector(".game-info-section");
const scoreDisplay = document.querySelector(".score-section");
const playerScoreText = document.querySelector("#player-score-text");
const machineScoreText = document.querySelector("#machine-score-text");



function chooseForMachine() {
  const randomNum = Math.floor(Math.random() * 3 + 1);
  if (randomNum == 1) {
    return "Rock";
  } else if (randomNum == 2) {
    return "Paper";
  } else {
    return "Scissors"; 
  }
}

function isDraw(playerChoice, computerChoice) {
  if (playerChoice == computerChoice) {
    return true;
  } else {
    return false;
  }
}

function userWon(playerChoice, computerChoice) {
  if (playerChoice == "rock") {
    // We can also use the AND operator but this feels more intuitive to me
    if (computerChoice == "scissors") {
      return true;
    } else return false; // We already checked for draw so only two cases remain - scissors and paper
  } else if (playerChoice == "paper") {
    if (computerChoice == "rock") {
      return true;
    } else return false;
  } else if (playerChoice == "scissors") {
    if (computerChoice == "paper") {
      return true;
    } else return false;
  }
}

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

function restartGame() {
  numberOfRoundsPlayed = 0;
  initializeScore();
}

function showGamingButtons() {
 gamingButtonsContainer.style.visibility = "visible";
}

function showChoiceImages() {
  machineChoiceImg.style.visibility = "visible";
  playerChoiceImg.style.visibility = "visible";
}

function hideChoiceImages() {
  machineChoiceImg.style.visibility = "hidden";
  playerChoiceImg.style.visibility = "hidden";
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

function resetGameInfoDisplay() {
  gameInfoDisplay.classList.remove("orange-text");
  gameInfoDisplay.classList.remove("green-text");
  gameInfoDisplay.classList.remove("red-text");
  gameInfoDisplay.offsetWidth;
  gameInfoDisplay.textContent = "";
}

function hideScoreDisplay() {
  scoreDisplay.style.visibility = "hidden";
}

function showScoreDisplay() {
  scoreDisplay.style.visibility = "visible";
}

function initializeScore () {
  playerScoreText.textContent = 0;
  machineScoreText.textContent = 0;
  playerScore = 0;
  machineScore = 0;
}

function updateScore() {
  playerScoreText.textContent = playerScore;
  machineScoreText.textContent = machineScore;
}

playBtn.addEventListener("click", () => {
  restartGame();
  showGamingButtons();
  showScoreDisplay();
  slashEffect.play();
  hideChoiceImages();
  playBtn.style.visibility = "hidden";
  resetGameInfoDisplay();
}
);

let machineChoice, userChoice;
let playerScore = 0;
let machineScore = 0;
// Use event delegation to handle click on user selection - Targets the img element of the buttons
gamingButtons.forEach((gamingButton) => {
  gamingButton.addEventListener("click", (event) => {
    numberOfRoundsPlayed += 1;

    showPlayButton();

    let target = event.target;
    userChoice = target.id;
    machineChoice = chooseForMachine().toLowerCase();

    switch (userChoice) {
      case "rock":
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

    if (isDraw(userChoice, machineChoice)) {
      resetGameInfoDisplay();
      gameInfoDisplay.classList.add("orange-text")
      gameInfoDisplay.textContent = "Draw 🤭"
    } else if (userWon(userChoice, machineChoice)) {
      playerScore += 1;
      resetGameInfoDisplay();
      gameInfoDisplay.classList.add("green-text")
      gameInfoDisplay.textContent = "You won! 🥳"
    } else {
      machineScore += 1;
      resetGameInfoDisplay();
      gameInfoDisplay.classList.add("red-text")
      gameInfoDisplay.textContent = "You lost! 😜";
    }
    updateScore();
  });
});

