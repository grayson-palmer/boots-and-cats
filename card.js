class Card {
  constructor(image, cardNum) {
    this.image = image;
    this.cardNum = cardNum
    this.matched = false;
    this.hasFlipped = false;
  }
  changeHasFlipped() {
    this.hasFlipped = !this.hasFlipped;
  }
  matched() {
    this.matched = true;
  }
}