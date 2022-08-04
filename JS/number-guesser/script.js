let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget () {
    return Math.floor(Math.random() * 9);
}

function compareGuesses (human, computer, secret) {
    const humanDifference = Math.abs(human - computer);
    const computerDifference = Math.abs(computer - secret);

    if (computerDifference === humanDifference) {
        return true;
    } else if (humanDifference < computerDifference) {
        return true;
    } else {
        return false;
    }
}

const updateScore = (winner) => {
    if (winner === "human") {
        humanScore++;
    } else {
        computerScore++;
    }
};

function advanceRound () {
    currentRoundNumber++;
}
