const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});





prayerPeace = `\n
A Prayer for Your Peace of Mind
\n
May calmness settle in the corners of your thoughts.
May your heart be light, and your breath untroubled.
Whatever burdens you carry, may they soften.
Whatever questions haunt you, may they rest awhile.
\n
I wish you the silence that heals,
the quiet that doesn't ache,
and the stillness where nothing is missing.
\n
May you feel safe inside your own being,
untouched by the storm outside.
May you trust that you are enough, just as you are—
and that you are held, even when alone.
\n
Peace to your mind.
Peace to your day.
Peace, always, to you.\n\n`




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
      case "yoga mat":
        yogaMat();
        break;
      default:
        console.log("Try again.");
        startGame();
    }
  });
}




    function bed() {
      // console.log("You go to your bed.");
      rl.question("Do you meditate, do a prayer, or go to sleep? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "meditate":
            meditate()
            break;
          case "prayer":
            prayer();
            break;
          case "sleep":
          case "go to sleep":
            console.log("You go to your bed and go to sleep");
            rl.close();
            break;
          default:
            console.log("Try again.");
            bed();
        }
      });
    }




        function meditate() {
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



        function prayer() {
          console.log("There is a prayer for peace")
          rl.question("Which prayer do you do? ", (answer) => {
            switch (answer) {
              case "peace":
                console.log(prayerPeace);
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "go back":
                console.log("You return to the starting point.");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              default:
                console.log("Try again.");
                prayer();
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




    function yogaMat() {
      console.log("there is a yoga mat.")
      rl.question("Do you do 5, 10, or 20 minutes of yoga? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "5":
            console.log("\nDo 5 minutes of yoga\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;
          case "10":
            console.log("\nDo 10 minutes of yoga\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;
          case "20":
            console.log("\nDo 20 minutes of yoga\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;
          default:
            console.log("Try again.");
            yogaMat();
        }
      });
    }











startGame();





