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
Let's convert the value the user enters to lowerCase for better
data handling. DONE with .toLowerCase()^^^
*/

// Test it here:
console.log(`Machine chooses ${machineChoice}. User chooses ${userChoice}`);
// All good

