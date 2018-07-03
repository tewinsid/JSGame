class GuaImage {
  constructor(game, name) {
    this.texture = game.imageByName(name);
    this.w = this.texture.width
    this.h = this.texture.height
    this.x = 0
    this.y = 0
  }
  static new (game, name){
    var i = new this(game, name)
    return i
  }

}
