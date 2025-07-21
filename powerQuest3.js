const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  console.log("Welcome to the Adventure!");
  console.log("You are in a forest. There is a path to the left and one to the right.");
  rl.question("Do you go left or right? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "left":
        leftPath();
        break;
      case "right":
        rightPath();
        break;
      default:
        console.log("Invalid choice. Try again.");
        startGame();
    }
  });
}

function leftPath() {
  console.log("You meet a talking frog.");
  rl.question("Do you talk to it or run away? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "talk":
      case "talk to it":
        console.log("The frog gives you a golden coin. You win!");
        rl.close();
        break;
      case "run":
      case "run away":
        console.log("You trip and fall into a pond. Game over.");
        rl.close();
        break;
      default:
        console.log("The frog blinks, waiting.");
        leftPath();
    }
  });
}

function rightPath() {
  console.log("You find a dark cave.");
  rl.question("Do you enter the cave or go back? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "enter":
      case "enter the cave":
        caveInside();
        break;
      case "go back":
        console.log("You return to the starting point.");
        startGame();
        break;
      default:
        console.log("You hesitate.");
        rightPath();
    }
  });
}

function caveInside() {
  console.log("Inside, there's a sleeping dragon and a shiny sword.");
  rl.question("Do you grab the sword or sneak away? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "grab":
      case "grab the sword":
        console.log("The dragon wakes up and burns you. Game over.");
        rl.close();
        break;
      case "sneak":
      case "sneak away":
        console.log("You quietly leave and live another day.");
        rl.close();
        break;
      default:
        console.log("The dragon stirs...");
        caveInside();
    }
  });
}

startGame();
