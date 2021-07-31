    let playerSelection;
    let computerSelection;

    playerSelection = prompt("Rock, Paper, or Scissors?", "Type Here");

    function computerPlay () {
        let computerPlayArray = [
            "Rock",
            "Paper",
            "Scissors"
          ];
        computerPlay = computerPlayArray[Math.floor(Math.random()*3)];
    }

    computerPlay;
    console.log(computerPlay);
