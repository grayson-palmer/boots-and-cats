var playerInputScreen = document.querySelector('.player-input-screen');
var player1Name = document.querySelector('#player-1-name');

playerInputScreen.addEventListener('click', inputClickHandler);

function inputClickHandler(event) {
  if (event.target.classList.contains('play-game-button')) {
    inputNotBlank();
  }
  
}

function inputNotBlank() {
  if (player1Name.value) {
    console.log('true');
  } else {
    console.log('false');
  }
}

