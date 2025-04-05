const readline = require("readline");

function playGame() {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const gameValues = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * gameValues.length);

  return new Promise((resolve) => {
    rl.question(
      "Enter your choice (rock, paper, or scissors): ",
      (userChoice) => {
        const userDefined = userChoice.toLowerCase();

        console.log(`You chose: ${userDefined}`);
        console.log(`System chose: ${gameValues[randomIndex]}`);

        let userCount = 0;
        let sysCount = 0;
        let tieCount = 0; // Initialize tie count here

        if (userDefined === gameValues[randomIndex]) {
          console.log("It's a tie!");
          tieCount = 1;
        } else if (
          (userDefined === "rock" && gameValues[randomIndex] === "scissors") ||
          (userDefined === "paper" && gameValues[randomIndex] === "rock") ||
          (userDefined === "scissors" && gameValues[randomIndex] === "paper")
        ) {
          console.log("You won! You got one point");
          userCount = 1;
        } else {
          console.log("System won! System got one point");
          sysCount = 1;
        }

        rl.close();
        resolve({ userCount, sysCount, tieCount }); // Resolve the promise with the counts
      }
    );
  });
}

async function rPS() {
  let userTotalCount = 0;
  let sysTotalCount = 0;
  let tieTotalCount = 0; // Initialize total tie count

  for (let i = 0; i < 10; i++) {
    const { userCount, sysCount, tieCount } = await playGame(); // Wait for the promise to resolve
    userTotalCount += userCount; // Update user total count
    sysTotalCount += sysCount; // Update system total count
    tieTotalCount += tieCount; // Update total tie count
    console.log(`Current user score: ${userTotalCount}`); // Log the user score after each round
    console.log(`Current system score: ${sysTotalCount}`); // Log the system score after each round
    console.log(`Current tie count: ${tieTotalCount}`); // Log the tie count after each round
  }

  console.log(`Final score after 10 rounds - User: ${userTotalCount}, System: ${sysTotalCount}, Ties: ${tieTotalCount}`); // Log the final scores

  if (userTotalCount > sysTotalCount) {
    console.log("Congratulations! You won the game.");
  } else if (userTotalCount < sysTotalCount) {
    console.log("System won the game. Better luck next time!");
  } else {
    console.log("The game ended in a tie!");
  }
}

rPS();
