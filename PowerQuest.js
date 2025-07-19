
const math = require('./locations/export.cjs');
const math = require('./export.cjs');

console.log(math.subtract(5, 2));  // 3


// Import the built-in 'readline' module, which allows reading user input from the console

const readline = require('readline');


// Create an interface to interact with the user via the command line

const rl = readline.createInterface({
  input: process.stdin,  // Read from standard input (keyboard)
  output: process.stdout // Write to standard output (console)
});


// Define a helper function that wraps 'rl.question' in a Promise
// This allows us to use 'await' to pause and wait for the user's answer

function ask(question) {
  return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
}


// This is the main function where the game logic happens

async function startGame() {

  // Intro text shown at the beginning of the game
  console.log("Welcome to PowerQuest!");
  console.log("You wake up in your bed. There is a door and a desk.\n");


  // Ask the first question and wait for the user's response
  let firstChoice = await ask("Do you open the 'door' or go to the 'desk'? ");


  // if (firstChoice.toLowerCase() == "exit") {
  //   rl.close();
  // }


  // Check the user's first choice
  
  if (firstChoice.toLowerCase() === 'door') {

    // If the user goes door, describe the scenario

    // console.log("\nYou go to the door.");


    // Ask what the user wants to do next

    let secondChoice = await ask("Do you go to the bathroom or kitchen? (bathroom/kitchen) ");


    // Handle sneaking past the dragon

    if (secondChoice.toLowerCase() === 'bathroom') {
      console.log("\nYou go to the bathroom.");
    } else {
      // Going back leads to a bad ending
      console.log("\nYou go to the kitchen.");
    }

  } else if (firstChoice.toLowerCase() === 'desk') {
    // If the user goes to desk, describe a different scenario
    console.log("\nYou find a computer and a phone");


    // Do you use the 'computer' or 'phone'?

    let secondChoice = await ask("Do you use the 'computer' or 'phone'? ");


    // You turn on the computer

    if (secondChoice.toLowerCase() === 'computer') {

      console.log("\nYou turn on the computer.");


      let secondChoice = await ask("Do you login or go back to bed? (login/'go to bed') ");


    // Handle sneaking past the dragon

      if (secondChoice.toLowerCase() === 'login') {
        console.log("\nYou login to the computer.");
      } else {
        // Going back leads to a bad ending
        console.log("\nYou go to bed.");
      }












    } else {

    // You pick up the phone

      console.log("\nYou pick up the phone");
    }

  } else {

    // If the input doesn't match any known command

    console.log("\nStart again.");
    // startGame();

  }

  // Close the readline interface when the game ends

  rl.close();
}

// Start the game by calling the main function

startGame();
