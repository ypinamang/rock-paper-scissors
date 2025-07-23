# rock-paper-scissors  
Good old rock paper scissors in JavaScript. This program attempts to break down the problem to the smallest details. Below is the pseudocode to demonstrate my thought process for the program.  
  
Note: The program does not use an array for the choices, so for the machine choice, I generate a random number between 1 and 3, and assign rock, paper, or scissors depending on the number generated.  
  
## Pseudocode   
  
## Generate and convert machine choice  
CREATE a function that returns rock, paper, or scissors based on random number  
  
GENERATE random number between 1 and 3  
IF random number is 1  
    RETURN "Rock"  
ELSE IF random number is 2  
    RETURN "Paper"  
ELSE  
    RETURN "Scissors"  
  
  
## Get user choice and machine choice  
CREATE a variable to store the user's choice  
CREATE a variable to store the machine's choice  
CALL the function that returns the machine's choice  
ASSIGN the machine's choice to the machine choice variable  
ASK the user for a choice between Rock, Paper, and Scissors  
ASSIGN the user's choice to the user choice variable  
  
## Keep the score  
CREATE a variable to store the machine score  
INITIALIZE machine score to 0  
CREATE a variable to store the user score  
INITIALIZE user score to 0  
  
## Create a function to check for a draw match  
CHECK for draw  
    COMPARE machine choice and user choice  
    IF machine choice equals user choice  
        RETURN true  
    ELSE  
        RETURN false  
  
## Create a function to check if the winner won  
CHECK for user win  
    COMPARE machine choice and user choice  
    IF user plays rock  
        IF machine plays paper  
            RETURN false  
        ELSE IF machine plays scissors  
            RETURN true  
    ELSE IF user plays paper   
        IF machine plays rock  
            RETURN true  
        ELSE IF machine plays scissors  
            RETURN false  
    ELSE IF user plays scissors  
        IF machine plays rock  
            RETURN false  
        ELSE IF machine plays paper  
            RETURN true  
          
  
## Check for win, lose, or draw.   
IF it was a draw  
    DISPLAY draw  
ELSE IF the user won  
    INCREASE user score  
    DISPLAY You won  
ELSE   
    INCREASE machine score  
    DISPLAY You lost  
  
  
  
  
  
  
  
