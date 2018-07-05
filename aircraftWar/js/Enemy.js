class Enemy extends GuaImage {
  constructor(game) {
    var name = 'enemy' + randomBetween(1, 1)
    super(game, name)
    this.setUp()
  }

  setUp() {
    this.x = randomBetween(0, this.game.canvas.width - this.w)
    this.y = -randomBetween(0, 20)
    this.speed = randomBetween(1, 2)
  }

  update() {
    super.update()
    if(this.y > this.game.canvas.height) {
      this.setUp()
    }
    this.move()
  }

  move() {
    this.y += this.speed
  }
}
const randomBetween = function(start, end) {
  var temp = Math.random() * (end - start + 1)
  return Math.floor(temp) + start
}
