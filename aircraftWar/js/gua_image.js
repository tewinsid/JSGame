class GuaImage {
  constructor(game, name) {
    this.game = game
    this.texture = game.imageByName(name);
    this.w = this.texture.width
    this.h = this.texture.height
    this.x = 0
    this.y = 0
  }

  draw() {
    this.game.drawImage(this)
  }

  update() {}
  
  static new (game, name){
    var i = new this(game, name)
    return i
  }

}
