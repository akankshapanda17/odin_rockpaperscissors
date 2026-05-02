console.log("Hello, World!");

getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

getHumanChoice = () => {
    const userInput = prompt("Enter rock, paper, or scissors:");
    return userInput.toLowerCase();
}

playRound = (humanChoice, computerChoice, scores) => {
    let result;
    if (humanChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        result = `You win! ${humanChoice} beats ${computerChoice}.`;
        scores.humanScore++;
    } else {
        result = `You lose! ${computerChoice} beats ${humanChoice}.`;
        scores.computerScore++;
    }
    console.log(result);
}

playGame = () => {
    let scores = { humanScore: 0, computerScore: 0 };
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, scores);
    }
    if (scores.humanScore > scores.computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (scores.computerScore > scores.humanScore) {
        console.log("Sorry! The computer won the game.");
    } else {
        console.log("It's a tie game!");
    }
    console.log(`Final Score - You: ${scores.humanScore}, Computer: ${scores.computerScore}`);
}

playGame();