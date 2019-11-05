class Player {
  constructor(name) {
    this.name = name;
    this.matchCount = 0;
    this.matches = [];
  }
  addMatchCount() {
    this.matchCount++;
  }
}