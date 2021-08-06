    const gameChoices = [
      "Rock",
      "Paper",
      "Scissors"
    ];
    
    let playerSelection;
    let computerSelection;
    let playerScore = 0;
    let computerScore = 0;

    function game() {
    for (let i = 0; i < 5; i++) { 

    function computerPlay() {
        return gameChoices[Math.floor(Math.random()*3)];
    }

    function playRound() {
      if ((playerSelection3 == "Rock" && computerSelection == "Paper")
      || (playerSelection3 == "Paper" && computerSelection == "Scissors")
      || (playerSelection3 == "Scissors" && computerSelection == "Rock")) 
      {
        computerScore = computerScore + 1
        return ("You lose! "+ computerSelection + " beats " + playerSelection3);
      }
      else if ((playerSelection3 == "Rock" && computerSelection == "Scissors")
      || (playerSelection3 == "Paper" && computerSelection == "Rock")
      || (playerSelection3 == "Scissors" && computerSelection == "Rock")) 
      {
        playerScore = playerScore + 1
        return ("You win! "+ playerSelection3 + " beats " + computerSelection);
      }
      else {
        return ("Draw! " + playerSelection3 + " is the same as " + computerSelection);
      }
    }


    playerSelection = prompt(gameChoices + "?");
    playerSelection2 = playerSelection.toLowerCase()
    playerSelection3 = playerSelection2.charAt(0).toUpperCase() + playerSelection2.slice(1);
    computerSelection = computerPlay();
    playRound(playerSelection2, computerSelection);
    console.log(playRound());

  } /* end of the for loop here */
} /* end of the loop function here */

    game();
    console.log("Game over! Player: " + playerScore/2 + " | Computer: " + computerScore/2) /* I don't know why but the score needs dividing by 2 to work properly */
    