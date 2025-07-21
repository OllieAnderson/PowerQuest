
// // Import the built-in 'readline' module, which allows reading user input from the console

// const readline = require('readline');

// // Create an interface to interact with the user via the command line

// const rl = readline.createInterface({
//   input: process.stdin,  // Read from standard input (keyboard)
//   output: process.stdout // Write to standard output (console)
// });


// // Define a helper function that wraps 'rl.question' in a Promise
// // This allows us to use 'await' to pause and wait for the user's answer

// function ask(question) {
//   return new Promise(resolve => rl.question(question, answer => resolve(answer.trim())));
// }	










async function bed() {
  console.log("You are on a bed.")
  console.log("Do you: ")
  console.log("1. go to desk ")
  console.log("2. read about Samphire")

  let action = await ask("");



  // create a switch statement to choose different actions



  switch (action) {
  case "desk":
    console.log("go to desk");
    break;
  case 2:
    console.log("read a book");
    break;
  case "bed":
    console.log("go to bed");
    bed.bed()
    break;
  case "yoga mat":
    console.log("go to yoga mat");
    break;
  case "closet":
    console.log("go to closet");
    break;
  case "bookshelf":
    console.log("go to bookshelf");
    break;
  default:
    console.log("start again.")
  }

   // rl.close();

}









 







module.exports = { bed };