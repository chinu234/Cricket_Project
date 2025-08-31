let score = JSON.parse(localStorage.getItem("score")) || {
        win: 0,
        lost: 0,
        tie: 0,
      };
      function updateScoreDisplay() {
        document.querySelector(
          ".current-score"
        ).innerText = `Current Score: Win: ${score.win}, Lost: ${score.lost}, Tie: ${score.tie}`;
      }
      updateScoreDisplay();
      function newComputerVal() {
        let randomNumber = Math.random() * 3;
        if (randomNumber >= 0 && randomNumber < 1) {
          return "Bat";
        } else if (randomNumber >= 1 && randomNumber < 2) {
          return "Ball";
        } else {
          return "Stump";
        }
      }
      function playGame(userChoice) {
        let computerValue = newComputerVal();
        document.querySelector(".user-value").innerText = `You have chosen ${userChoice}`;
      document.querySelector(".computer-value").innerText = `Computer has chosen ${computerValue}`;
        if (userChoice === computerValue) {
          document.querySelector('.result').innerText=`It's a Tie!!!`
          score.tie++;
        } else if (
          (userChoice === "Bat" && computerValue === "Ball") ||
          (userChoice === "Ball" && computerValue === "Stump") ||
          (userChoice === "Stump" && computerValue === "Bat")
        ) {
          document.querySelector('.result').innerText=`You Win!!!`
          score.win++;
        } else {
          document.querySelector('.result').innerText=`You Lose!!!`
          score.lost++;
        }
        localStorage.setItem("score", JSON.stringify(score));
        updateScoreDisplay();
      }

      function resetScore() {
        localStorage.clear();
        score.win = 0;
        score.lost = 0;
        score.tie = 0;
        document.querySelector('.user-value').innerText=``
          document.querySelector('.computer-value').innerText=``
          document.querySelector('.result').innerText=``
        updateScoreDisplay();
      }