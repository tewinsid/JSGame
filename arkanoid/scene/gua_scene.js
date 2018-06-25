class GuaScene {
  constructor(game) {
    this.game = game
  }
  draw() {
  }
  update(){}

  static newInstance (game) {
    var i = new this(game)
    return i
  }
}
