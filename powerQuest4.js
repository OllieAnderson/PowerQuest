const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  console.log("You are at a desk. There is bed and a door.");
  rl.question("Do you go bed or door? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "bed":
        bed();
        break;
      case "door":
        door();
        break;
      default:
        console.log("Try again.");
        startGame();
    }
  });
}

function bed() {
  // console.log("You go to your bed.");
  rl.question("Do you meditate or go to sleep? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "sleep":
      case "go to sleep":
        console.log("You go to your bed and go to sleep");
        rl.close();
        break;
      case "meditate":
        meditate()
        break;
      default:
        console.log("Try again.");
        bed();
    }
  });
}


function meditate() {
  // console.log("");
  rl.question("How long do you mediate for? (5/10/15 minutes) ", (answer) => {
    switch (answer) {
      case "5":
        console.log("\nYou go to your bed and meditate for 5 minutes\n\n");
        rl.close();
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


function door() {
  rl.question("Do you go ? ", (answer) => {
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



