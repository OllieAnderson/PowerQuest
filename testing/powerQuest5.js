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
  console.log("there is a bathroom and kitchen.")
  rl.question("Do you go to the bathroom or go to the kitchen? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "bathroom":
      case "go to the bathroom":
        bathroom();
        break;
      case "go back":
        console.log("You return to the starting point.");
        startGame();
        break;
      default:
        console.log("You hesitate.");
        door();
    }
  });
}

    function bathroom() {
      console.log("There is a sink and a toilet and a shower.");
      rl.question("Do you use the sink or toilet or shower? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "sink":
          case "use the sink":
            console.log("\nBrush your teeth.\n\n");
            rl.close();
            break;
          case "toilet":
          case "use the toilet":
            console.log("\nYou use the toilet.\n\n");
            rl.close();
            break;
          case "shower":
          case "use the shower":
            console.log("\nYou use the shower.\n\n");
            rl.close();
            break;
          default:
            console.log("Try again.");
            bathroom();
        }
      });










}

startGame();



