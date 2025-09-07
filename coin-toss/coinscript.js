const message = document.querySelector(".message");
const buttons = document.querySelectorAll("button");
message.innerHTML = "Select either Heads or Tails";
const coinArray = ["Heads", "Tails"];
let score = [0, 0];
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", CoinToss);
}

function CoinToss(e) {
    let playerGuess = e.target.innerHTML;
    let toss = Math.floor(Math.random() * 2); //to get rid off from decimal use math.floor with math.random and to get 0 and 1 use math.random()*2.
    let computerGuess = coinArray[toss];
    let output;
    message.innerHTML = "Computer Selected " + computerGuess + "<br>";
    if (playerGuess === computerGuess) {
        output = "Player Wins";
        score[0]++;
    } else {
        output = "Computer Wins";
        score[1]++;
    }
    message.innerHTML += output + "<br>Player " + score[0] + " Computer " + score[1];
}