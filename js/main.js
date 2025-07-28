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

const playerChoiceImg = document.querySelector(".player-choice-container > img");
const machineChoiceImg = document.querySelector(".machine-choice-container > img");
const playerOptions = document.querySelector(".player-options-container");



const playBtn = document.querySelector("#play-btn");
playBtn.addEventListener("click", () => {
  slashEffect.play();
  playerOptions.style.visibility = "visible";
  playerChoiceImg.style.visibility = "hidden";
  machineChoiceImg.style.visibility = "hidden";
  playBtn.style.visibility = "hidden";
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


let userScore = 0;
let machineScore = 0;

// Play a round and display the winner

  // Generate machine choice and get user choice
  let machineChoice, userChoice;
  playerChoiceImg.style.visibility = "hidden";
  machineChoiceImg.style.visibility = "hidden";

  
  
  // Use event delegation to handle click on user selection - Targets the img element of the buttons
  playerOptions.addEventListener("click", (event) => {
    airBlowEffect.play();
    let target = event.target 
    userChoice = target.id;
    machineChoice = chooseForMachine().toLowerCase();
    playerOptions.style.visibility = "hidden";

    

    switch(userChoice) {
    case "rock":
      console.log("user has clicked roockk")
      playerChoiceImg.setAttribute("src", playerRockImg);
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
  
  animateChoices();
  airBlowEffect.play();
  playerChoiceImg.style.visibility = "visible";
  machineChoiceImg.style.visibility = "visible";
  playBtn.style.visibility = "visible";
    
    

  console.log(`Machine chooses ${machineChoice}. User chooses ${userChoice}`);

  if (isDraw(userChoice, machineChoice)) {
    console.log("Draw 🤭");
  } else if (userWon(userChoice, machineChoice)) {
    userScore += 1;
    console.log("You won! Hurray! 🥳");
  } else {
    machineScore += 1;
    console.log("You lost! 😜");
  }

  console.log(`${userScore} points for user.....${machineScore} points for machine `)
  
  

});

  function displayMachineChoice() {
    switch(machineChoice) {
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