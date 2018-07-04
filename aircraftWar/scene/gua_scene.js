class GuaScene {
  constructor(game) {
    this.game = game
    this.elements = []
  }
  draw() {
    // log(this.elements)
    for(var i=0; i < this.elements.length; i++) {
      this.game.drawImage(this.elements[i]);
    }
  }
  addElements(element) {
    this.elements.push(element)
  }
  update(){}
}
