    const gameChoices = [
      "Rock",
      "Paper",
      "Scissors"
    ];
    
    let playerSelection;
    let computerSelection;

    function computerPlay() {
        return gameChoices[Math.floor(Math.random()*3)];
    }

    function playRound() {
      if ((playerSelection == "Rock" && computerSelection == "Paper")
      || (playerSelection == "Paper" && computerSelection == "Scissors")
      || (playerSelection == "Scissors" && computerSelection == "Rock")) 
      {
        return ("You lose! "+ computerSelection + "beats " + playerSelection);
      }
      else if ((playerSelection == "Rock" && computerSelection == "Scissors")
      || (playerSelection == "Paper" && computerSelection == "Rock")
      || (playerSelection == "Scissors" && computerSelection == "Rock")) 
      {
        return ("You win! "+ playerSelection + " beats " + computerSelection);
      }
      else {
        return ("Draw! " + playerSelection + " is the same as " + computerSelection);
      }
    }

    playerSelection = prompt(gameChoices + "?");
/*    playerSelection.toLowerCase();
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1); */
    computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(playRound());


    