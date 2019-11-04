class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.matched = false;
    this.hasFlipped = false;
  }
  flipCard() {
    this.hasFlipped = !this.hasFlipped;
    deck.selectedCards.push(this);
  }
  matched() {
    this.matched = true;
  }
}