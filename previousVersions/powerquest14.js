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


meditationDigestion = `\n

A Meditation on Digesting Food

Sit or lie down comfortably.
Let your hands rest softly on your belly, over the quiet work of your body.

Take a slow breath in through your nose.
Feel your abdomen rise — not with force, but ease.
Exhale gently. Let go of any tension.

Now turn your awareness inward,
not to thoughts or plans, but to the center of you—
to the warmth of your stomach, that hums below thought.

You have eaten.
You have been given to.
Now your body begins its unseen art.

There is no need to assist, only to trust.
Your body knows what to do.
Muscles contract, enzymes awaken, cells drink in the broken-down gifts.

Let your mind rest in that rhythm.
Let your breath mirror the calm of digestion.
Inhale in.
Exhale out.

If discomfort arises, greet it with kindness.
Softly say, I am here.
I am listening.

You are slowly absorbing and renewing.
What you eat becomes part of you—not just flesh, but mood, memory, motion.

Feel the belly now—heavy, light, silent, active—whatever it is,
welcome it.

As you breathe, imagine warmth moving through your core.
Golden, steady, tender.
Let it flow through your intestines like sunlight through water.

Stay with this quiet for a while.
Let go of urgency, of needing to do.
Just digest.
Just be.

And when you're ready to move again,
do so gently.
Carry with you the knowledge:
Your body is working, always,
in your favor.


`




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
      console.log("\nYou can use the computer to look at email or look at todo list.")
      rl.question("\nUse the computer to? ", (answer) => {
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
        console.log("You go to bed.")
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
          rl.question("How long do you mediate for 5 minutes or on digestion? ", (answer) => {
            switch (answer) {
              case "5":
                console.log("\nYou go to your bed and meditate for 5 minutes\n\n");
                rl.question("continue? ", (answer) => {startGame()})
                break;
              case "digestion":
                // console.log("You return to the starting point.");
                console.log(meditationDigestion)
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





