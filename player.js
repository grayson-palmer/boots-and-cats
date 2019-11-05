class Player {
  constructor(name) {
    this.name = name;
    this.roundCount = 0;
    this.time = null;
  }
  addRoundCount() {
    this.roundCount++;
  }
  setPlayerFinishTime(time) {
    this.addRoundCount();
    this.time = time;
  }
  saveToStorage() {
    var previousBoard = JSON.parse(localStorage.getItem('leaderBoard')) || [];
    var storePlayer = JSON.stringify({'name': this.name, 'time': this.time});
    previousBoard.push(storePlayer);
    localStorage.setItem('leaderBoard', previousBoard);
  }
}