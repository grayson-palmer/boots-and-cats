var playerInputScreen = document.querySelector('.player-input-screen');

playerInputScreen.addEventListener('click', inputClickHandler);

function inputClickHandler(event) {
  inputNotBlank(event);
}

function inputNotBlank(event) {
  console.log(event.target);
  console.log(event);
}

