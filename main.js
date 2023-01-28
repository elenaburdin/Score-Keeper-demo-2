const playerOneButton = document.querySelector('#player-1-btn');
const playertwoButton = document.querySelector('#player-2-btn');

const playerOneDisplay = document.querySelector('#player-1-display');
const playerTwoDisplay = document.querySelector('#player-2-display');

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

let winningScore = 3;
let isGameOver = false;
let playerOneScore = 0;
let playerTwoScore = 0;

playerOneButton.addEventListener('click', () => {
    if (!isGameOver) {
        playerOneScore += 1;
        if (playerOneScore === winningScore) {
            isGameOver = true;
            playerOneDisplay.classList.add('has-text-success');
            playerTwoDisplay.classList.add('has-text-danger');
        }
        playerOneDisplay.textContent = playerOneScore;
    }
})

playertwoButton.addEventListener('click', () => {
    if (!isGameOver) {
        playerTwoScore += 1;
        if (playerTwoScore === winningScore) {
            isGameOver = true;
            playerTwoDisplay.classList.add('has-text-success');
            playerOneDisplay.classList.add('has-text-danger');
        }
        playerTwoDisplay.textContent = playerTwoScore;
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset);


function reset() {
    isGameOver = false;
    playerOneScore = 0;
    playerTwoScore = 0;
    playerOneDisplay.textContent = 0;
    playerTwoDisplay.textContent = 0;
    playerOneDisplay.classList.remove('has-text-success', 'has-text-danger');
    playerTwoDisplay.classList.remove('has-text-success', 'has-text-danger');
    playerOneButton.disabled = false;
    playertwoButton.disabled = false;

}
