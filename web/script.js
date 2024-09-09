let fastestPlayer = null;
let gameActive = true;

function playerPressed(playerNumber) {
    if (gameActive) {
        fastestPlayer = playerNumber;
        document.getElementById('result').innerText = "Người chơi " + playerNumber + " đã nhấn nhanh nhất!";
        disableButtons();
        gameActive = false;
    }
}

function disableButtons() {
    document.getElementById('player1').disabled = true;
    document.getElementById('player2').disabled = true;
    document.getElementById('player3').disabled = true;
    document.getElementById('player4').disabled = true;
}

function resetGame() {
    document.getElementById('result').innerText = "Chưa có ai được chọn!";
    enableButtons();
    fastestPlayer = null;
    gameActive = true;
}

function enableButtons() {
    document.getElementById('player1').disabled = false;
    document.getElementById('player2').disabled = false;
    document.getElementById('player3').disabled = false;
    document.getElementById('player4').disabled = false;
}
