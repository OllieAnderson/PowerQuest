const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function startGame() {
  console.log("You are at a desk. There is a computer, a phone, and a notepad.");
  rl.question("Do you use computer, phone, or notepad? Or do you leave the desk? ", (answer) => {
    switch (answer.toLowerCase()) {
      case "computer":
        computer();
        break;
      case "phone":
        rl.close();
        break;
      case "notepad":
        rl.close();
        break;
      case "leave":
        rl.close();
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
        rl.close();
        break;
      case "todo":
      case "todolist":
        console.log("\n Go look at todolist\n\n")
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
















startGame();



