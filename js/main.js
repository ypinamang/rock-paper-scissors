function machineChoice() {
    // Generate random number between 1 and 3 
    const randomNum = Math.floor((Math.random() * 3) +1);

    // Convert random number to rock, paper, or scissors 
    if (randomNum == 1) {
        return "Rock";
    } else if (randomNum == 2) {
        return "Paper";
    } else {
        return "Scissors"; // only obvious option left
    }
}

// test out function machineChoice() --> Should print Rock, Paper, or Scissors
console.log(machineChoice());