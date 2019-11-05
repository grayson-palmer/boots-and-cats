class Card {
  constructor(image, cardNum) {
    this.image = image;
    this.cardNum = cardNum
    this.hasMatched = false;
    this.hasFlipped = false;
  }
  changeHasFlipped() {
    this.hasFlipped = !this.hasFlipped;
  }
  matched() {
    this.hasMatched = true;
  }
}