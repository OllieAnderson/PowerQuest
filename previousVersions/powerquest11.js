const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});







function startGame() {
  console.log("\nYou are at a desk. There is a computer, a phone, and a notepad.");
  rl.question("Do you use the desk or do you leave it? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "desk":
        desk();
        break;
      case "leave":
        leave()
        break;
      case "exit": 
        rl.close();
        break
      default:
        console.log("Try again.");
        startGame();
    }
  });
}








function desk() {
  console.log("\nYou are at a desk. There is a computer, a phone, and a notepad.");
  rl.question("Do you use computer, phone, or notepad? Or do you leave the desk? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "computer":
        computer();
        break;
      case "phone":
        startGame();;
        break;
      case "notepad":
        startGame();;
        break;
      case "leave":
        leave()
        break;
      case "exit":
        rl.close();
        break;
      default:
        console.log("Try again.");
        startGame();
    }
  });
}

    function computer() {
      console.log("You can use the computer to look at email or look at todo list.")
      rl.question("Use the computer to? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "email":
            console.log("\n Go look at emails\n\n");
            rl.question("continue? ", (answer) => {startGame()})
            break;
          case "todo":
          case "todolist":
            console.log("\n Go look at todolist\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;
          case "exit":
            rl.close();
            break;
          default:
            console.log("Try again.");
            computer();
        }
      });
    }


function leave() {
  console.log("There is bed, and a door.");
  rl.question("Do you go bed or door, or yoga mat? ", (answer) => {
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
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "go back":
                console.log("You return to the starting point.");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              default:
                console.log("Try again.");
                meditate();
            }
          });
        }


    function door() {
      console.log("there is a bathroom, kitchen.")
      rl.question("Do you go to the bathroom or go to the kitchen? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "bathroom":
          case "go to the bathroom":
            bathroom();
            break;
          case "kitchen":
            console.log("Use the kitchen.");
            rl.question("continue? ", (answer) => {startGame()})
            break;
          default:
            console.log("Try again.");
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
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "toilet":
              case "use the toilet":
                console.log("\nYou use the toilet.\n\n");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "shower":
              case "use the shower":
                console.log("\nYou use the shower.\n\n");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              default:
                console.log("Try again.");
                bathroom();
            }
          });

        }












startGame();





