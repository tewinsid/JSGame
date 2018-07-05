class Hero extends GuaImage {
  constructor(game) {
    super(game, 'hero')
    this.setUp()
  }

  fire() {
    if(this.coolDown == 0) {
      var x = this.x + this.w / 2
      var y = this.y - 10
      var b = Bullet.new(this.game)
      b.x = x
      b.y = y
      this.scene.elements.push(b)
      this.resetCoolDown();
    }
  }

  resetCoolDown() {
    this.coolDown = 15
  }

  update() {
    log(this.coolDown)
    super.update()
    if (this.coolDown > 0) {
      this.coolDown--
    }
    this.fire()
  }

  setUp() {
    this.x = 100
    this.y = 400
    this.speed = 10
    this.resetCoolDown();
  }

  moveLeft() {
    if(this.x >=0 ) {
      this.x -= this.speed
    }
  }

  moveRight() {
    if(this.x <= this.game.canvas.width - this.w ) {
      this.x += this.speed
    }
  }

  moveUp() {
    if(this.y >= 10 ) {
      this.y -= this.speed
    }
  }

  moveDown() {
    if(this.y <= this.game.canvas.height - this.h ) {
      this.y += this.speed
    }
  }
}
