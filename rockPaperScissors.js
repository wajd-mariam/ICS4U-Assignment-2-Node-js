/**
 * Copyright (c) 2020
 *
 * This program lets user play Rock, Paper, Scissors game 
 * against the computer.
 * 
 * @author Wajd Mariam <wajd.mariam@mths.ca>
 *
 * Created on : 2020/12/04
 */
 
// Importing prompt
const prompt = require('prompt-sync')({sigint: true});

// Declaring used Constants and Variables:
var userMove = "";
var computerMove = "";
  
// Welcoming user and giving instructions:
console.log();
console.log(`Welcome to Rock, Paper, Scissors game!`);
console.log();
console.log(`Valid Moves are [Rock, Paper, Scissors]`);
console.log(`(Enter Quit to exit game)`);
console.log();
  
// Entering a while true Game Loop
do {
  // Try Catch statement:
  try {
    // Input 
    userMove = prompt(`Enter one of the valid moves above: `);
    // Exiting Game:
    if (userMove == ("Quit")) {
      break;
    }
    // Checking if user entered a valid move:
    if (userMove != ("Rock") && userMove != ("Paper") 
        && userMove != ("Scissors")) {
      console.log("You didn't enter a valid move :/");
      console.log();
    } else {
      // Generating Random Numbers:
      const randomNumber = Math.floor((Math.random() * 3));
      // Assigning the random generated number to a move and displaying the computer move:
      if (randomNumber == 0) {
        computerMove = "Rock";
      } else if (randomNumber == 1) {
        computerMove = "Paper";
      } else if (randomNumber == 2) {
        computerMove = "Scissors";
      }
      // Printing computer move:
      console.log(`The Computer chose (${computerMove})`);
      console.log();
      
      // Process / Output
      // Determining who won the round and displaying results to user:
      if (userMove == computerMove) {
        console.log(`It's a tie!`);
      } else if ((userMove == ("Paper") && computerMove == ("Rock"))
                  || (userMove == ("Rock") && computerMove == ("Scissors"))
                  || (userMove == ("Scissors") && computerMove == ("Paper"))) {
        console.log(`YOU WON!`);
      } else {
        console.log(`You lost :/`);
      }
    }

  // Error catch statement:
  } catch(err) {
    console.log (`An error occurred`);
    break;
  }
} while (true);
console.log();
console.log(`Thanks for playing my game!`);