class Card {
  constructor(name, image) {
    this.name = name;
    this.image = image;
    this.matched = false;
    this.hasFlipped = false;
  }
  hasFlipped() {
    this.hasFlipped = !this.hasFlipped;
  }
  matched() {
    this.matched = true;
  }
}