class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.matched = false;
    this.hasFlipped = false;
  }
  changeHasFlipped() {
    this.hasFlipped = !this.hasFlipped;
    deck.selectedCards.push(this);
  }
  matched() {
    this.matched = true;
  }
}