const { log } = require("console");

// checking if else
let logined = false;
let newUser = "new";
if (newUser === "new") {
  console.log("HI ! new user welcome to the website ");
  if (logined) {
    console.log("you are logined you can contiue");
  } else {
    console.log(" you are not a user ! you cant login sorry ");
  }
} else {
  console.log("you need to sign up to become new user");
}

// Practice exercise 4.1
// 1. Create a variable with a Boolean value.
// 2. Output the value of the variable to the console.
// 3. Check whether the variable is true and if so, output a message to the console,
// using the following syntax:
// if(myVariable){
// //action
// }
// Logic Statements
// 4. Add another if statement with an ! in front of the variable to check whether
// the condition is not true, and create a message that will be printed to the
// console in that instance. You should have two if statements, one with an
// ! and the other without. You could also use an if and an else statement
// instead—experiment!
// 5. Change the variable to the opposite to see how the result changes.

let rain = true;

if (rain) {
  console.log("it is raining");
} else {
  console.log("its bad weather");
}

if (!rain) {
  console.log("it is raining");
} else {
  console.log("its bad weather");
}
/* asking user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a command: ', (command) => {
  console.log(`You entered: ${command}`);

  // Here you can use the user input (command) to execute terminal commands or other logic
  const { exec } = require('child_process');
  
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }

    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return;
    }

    console.log(`Output: ${stdout}`);
  });

  rl.close();
}); */

//  readline from the terminal;
/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let age
rl.question('Please enter your age: ', (input) => {
  age = input
  console.log(`You entered: ${age}`);
  if (age >= 21) {
    console.log("Accessed to alcohol");
  } else {
    console.log("Not allowed to consume");
  }
  rl.close();
});
 */

/* Practice exercise 4.3
1. Create a Boolean value for an ID variable
2. Using a ternary operator, create a message variable that will check whether 
their ID is valid and either allow a person into a venue or not
3. Output the response to the consol
 */
/* const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// lets deal with user id 
let id;
rl.question("Please enter your id: ", (input) => {
  id = input;
  console.log(`YOUR ID is ${id}`);

  if (id == 1) {
    id = true;
  } else {
    id = false;
  }

  let message = id
    ? console.log("welcome the venue")
    : console.log("sorry ! not allowed");
  rl.close();
});
 */

// comes lets play if we have user id of arrays from 1 to 10 if the user input a value that is in the array than the user is allowed

/* 
const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});


const valueIds=[1,2,3,4,5,6,7,8,99,789]
let id;
rl.question("please enter your id:",(input)=>{
  id= parseInt(input,10);
  console.log(    `the entered id is ${id}`)

  if(valueIds.includes(id)){
    console.log("you have acess to entry into the show ")

  }else{
    console.log("Sorry ! You dont have access into the show ");
    
  }

rl.close();
})
 */
// oks end the output

/* In this exercise, we'll create a Magic 8-Ball random answer generator:
1. Start by setting a variable that gets a random value assigned to it. The value 
is assigned by generating a random number 0-5, for 6 possible results. You 
can increase this number as you add more results.
2. Create a prompt that can get a string value input from a user that you can 
repeat back in the final output.
3. Create 6 responses using the switch statement, each assigned to a different 
value from the random number generator.   
4. Create a variable to hold the end response, which should be a sentence 
printed for the user. You can assign different string values for each case, 
assigning new values depending on the results from the random value.
5. Output the user's original question, plus the randomly selected case 
response, to the console after the user enters their question */

const user = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

/* let randomValue = Math.floor(Math.random() * 3);

let userQuery;
user.question("please !ask Magic 8 Ball a question :", (input) => {
  userQuery = input.trim();
  console.log(`The question you askesd : ${userQuery}`);
  switch (randomValue) {
    case 0:
      console.log("hello!its been friday");
      break;
    case 1:
      console.log("how about watching a iron man movie");
      break;
    case 2:
      console.log("its been complicated to listen to world news");
      break;
    case 3:
      console.log("Spend time with your close relatives");
      break;
    case 4:
      console.log("lets play a badminton");
      break;
    case 5:
      console.log("watch cricket live match");
      break;
    case 6:
      console.log(" how about riding a bike in aruku valley ");
      break;
  }
  user.close();
});
 */

/* Practice exercise 4.5 
1. Create a variable called prize and use a prompt to ask the user to set the 
value by selecting a number between 0 and 10
 2. Convert the prompt response to a number data type
 3. Create a variable to use for the output message containing the value "My 
Selection: "
 4. Using the switch statement (and creativity), provide a response back 
regarding a prize that is awarded depending on what number is selected
 5. Use the switch break to add combined results for prizes
 6. Output the message back to the user by concatenating your prize variable 
strings and the output message string
 */

/* 
let prize;
user.question("please! enter the the value between 0 to 10 :", (input) => {
  prize = Number(input);
  let mySelection = "My Selection :" + prize;
  let response;
  switch (prize) {
    case 0 || 2:
      response = "Sorry, you did not win any prize";
      break;
    case 2 || 3:
      response = "you have been selected";
      break;
    case 5 || 4:
      response = "come on you are upto the mark";
      break;
    case 6 || 7:
      response = "you won the second prize";
      break;
    case 8 || 9:
      response = "you are the Topper";
      break;
    case 9 || 10:
      response = "you are the Alumini";
      break;
    default:
      response = "Invalid input! Please enter a number between 0 and 10.";
  }
  console.log(mySelection + "\n" + response);

  user.close();
}); */

//Projects
/* Evaluating a number game
Ask the user to enter a number and check whether it's greater than, equal to, or less 
than a dynamic number value in your code. Output the result to the user */

// I am extending the game with jeldi five game
/* let userNum;
let numGenerator = Math.floor(Math.random() * 100);

user.question("select a random number between 1 to 100:", (input) => {
  userNum = Number(input);
  console.log("My Selection is : " + userNum);

  if (userNum > 100) {
    console.log("please check the num , You have entered num greater than 100");
  } else if (userNum === numGenerator) {
    console.log("Congratulations! You have won the game");
  } else if (userNum > numGenerator) {
    console.log("You have guessed greater  number");
  } else if (userNum < numGenerator) {
    console.log("You have guessed less than the number");
  } else {
    console.log("Please enter valid input");
  }

  user.close();
}); */

/* Friend checker game
Ask the user to enter a name, using the switch statement to return a confirmation 
that the user is a friend if the name selected is known in the case statements. You 
can add a default response that you don't know the person if it's an unknown name. 
Output the result into the console */

/* let friend;
user.question("please! enter the name of your Friend :", (input) => {
  friend = String(input);
  let mySelection = "My Selection :" + friend;
  let response;
  switch (friend) {
    case "Amin":
      response = "yes ! Amin is your friend";
      break;
    case "Suresh":
      response = "yes ! Suresh is your friend";
      break;
    case "Nitish":
      response = "yes! Nitish is your friend";
      break;

    default:
      response = "Invalid input! Please enter a Valid Friend";
  }
  console.log(mySelection + "\n" + response);

  user.close();
});
 */

/* Rock Paper Scissors game
This is a game between a player and the computer, where both will make a random 
selection of either Rock, Paper, or Scissors (alternatively, you could create a version 
using real player input!). Rock will beat out Scissors, Paper will beat out Rock, and 
Scissors will beat out Paper. You can use JavaScript to create your own version of 
this game, applying the logic with an if statement. Since this project is a little more 
difficult, here are some suggested steps:
1. Create an array that contains the variables Rock, Paper, and Scissors.
2. Set up a variable that generates a random number 0-2 for the player and then 
do the same for the computer's selection. The number represents the index 
values in the array of the 3 items.
3. Create a variable to hold a response message to the user. This can show the 
random results for the player and then also the result for the computer of the 
matching item from the array. 
4. Create a condition to handle the player and computer selections. If both are 
the same, this results in a tie. 
5. Use conditions to apply the game logic and return the correct results. 
There are several ways to do this with the condition statements, but you 
could check which player's index value is bigger and assign the victory 
accordingly, with the exception of Rock beating Scissors.


6. Add a new output message that shows the player selection versus the 
computer selection and the result of the game. */

//ROCK PAPER SCISSORS
/* const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let rock = 1;
let paper = 2;
let scissors = 3;
let sysrandom = Math.floor(Math.random() * 3) + 1; // Random number between 1 and 3
let userValue;

rl.question("Please select the choices and enter the number you want to choose 1.Rock 2.Paper 3.Scissors: ", (input) => {
  userValue = parseInt(input);
  console.log("Your value is: " + userValue);
  console.log("System value is: " + sysrandom);
  
  let response;
  let score;

  if (userValue === sysrandom) {
    response = "It's a tie!";
    score = 0;
  } else if (
    (userValue === rock && sysrandom === scissors) || 
    (userValue === paper && sysrandom === rock) || 
    (userValue === scissors && sysrandom === paper)
  ) {
    response = "You win!";
    score = 1;
  } else {
    response = "You lose!";
    score = -1;
  }

  console.log(response);
  console.log("Score: " + score);

  rl.close();
});
 */

 
