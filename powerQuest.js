
// const books = require('./modules/bookshelf/books.cjs');



const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




function startGame() {
  console.log("\nYou are at a desk. There is a computer, a phone, and a notepad.");
  rl.question("\nDo you use the desk or do you leave it? ", (answer) => {
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
  // console.log("\nYou are at a desk. There is a computer, a phone, and a notepad.");
  rl.question("\nDo you use computer, phone, or notepad? ", (answer) => {
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
      case "back":
        startGame();
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
      // console.log("\nYou can use the computer to look at emaillook at todo list.")
      rl.question("\nUse the computer to look at email, todolist, or google calendar? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "email":
            console.log("\n Go look at emails\n\n");
            rl.question("continue? ", (answer) => {startGame()})
            break;
          case "todo":
          case "todolist":
          case "todo list":
            console.log("\n Go look at todolist\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;

          case "calendar":
          case "google calendar":
            console.log("\n Go look at google calendar\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;
            case "exit":
              rl.close();
              break;
            case "back":
              desk()
              break
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
        console.log("You go to bed.")
        bed();
        break;
      case "door":
        door();
        break;
      case "yoga mat":
        yogaMat();
        break;
      case "back":
        startGame()
        break
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
            sleep()
            break;
          case "back":
            leave()
            break
          default:
            console.log("Try again.");
            bed();
        }
      });
    }




        function meditate() {
          rl.question("How long do you mediate for 5 minutes or on digestion? ", (answer) => {
            switch (answer) {
              case "5":
                console.log("\nYou go to your bed and meditate for 5 minutes\n\n");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "digestion":
                // console.log("You return to the starting point.");
                console.log(books.meditationDigestion)
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "back":
                bed()
                break
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
                console.log(books.prayerPeace);
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




        function sleep() {
          rl.question("Do you want to nap or sleep? ", (answer) => {
            switch (answer) {
              case "nap":
                console.log("have a nap for 15 minutes.");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "sleep":
                console.log(books.sleepRoutine);
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "back":
                bed();
                break;
              case "exit":
                rl.close();
                break;
              default:
                console.log("Try again.");
                sleep();
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
      rl.question("Do you do 5 minutes or supine yoga for 10 minutes? ", (answer) => {
        switch (answer.toLowerCase()) {
          case "5":
            console.log("\nDo 5 minutes of yoga\n\n")
            rl.question("continue? ", (answer) => {startGame()})
            break;
          case "supine":
            console.log("\nDo 10 minutes of supine yoga\n\n")
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





