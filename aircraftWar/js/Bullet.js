class Bullet extends GuaImage {
  constructor(game) {
    super(game, 'bullet')
    this.setUp()
  }

  setUp() {
    this.x =
    this.y = -randomBetween(0, 20)
    this.speed = 2
  }

  update() {
    super.update()
    if(this.y > this.game.canvas.height) {
      this.setUp()
    }
    this.move()
  }

  move() {
    this.y -= this.speed
  }
}
