const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "scissors" ||
    userInput === "paper" ||
    userInput === 'bomb'
  ) {
    return userInput;
  } else {
    console.log("Invalid input.");
  }
};

function getComputerChoice() {
  const gen = Math.floor(Math.random() * 3);
  switch (gen) {
    case 0:
      return "rock";
      break;
    case 1:
      return "scissors";
      break;
    case 2:
      return "paper";
      break;
    default:
      return "oops thats not valid.";
  }
}

function determineWinner(userChoice, computerChoice) {
  if (userChoice === "bomb") {
    return "Haha, clever you win!";
  }

  if (computerChoice === userChoice) {
    return "The game was a tie";
  }

  if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }

  if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }

  if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "The computer won.";
    } else {
      return "The user won.";
    }
  }
}

function playGame(input) {
  const userChoice = getUserChoice(input);
  console.log(`You played: ${userChoice}`);
  const computerChoice = getComputerChoice();
  console.log(`The computer played: ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame('scissors');
// console.log(getUserChoice('roc'))
