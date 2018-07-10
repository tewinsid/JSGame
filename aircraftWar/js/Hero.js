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
    this.coolDown = config.coolDown
  }

  update() {
    this.speed = config.hero_speed
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
    if(this.x >= 0) {
      this.x -= parseInt(this.speed)
    }
  }

  moveRight() {
    log(this.speed)
    if(this.x <= this.game.canvas.width - this.w ) {
      this.x += parseInt(this.speed)
    }
  }

  moveUp() {
    if(this.y >= 10 ) {
      this.y -= parseInt(this.speed)
    }
  }

  moveDown() {
    if(this.y <= this.game.canvas.height - this.h ) {
      this.y += parseInt(this.speed)
    }
  }
}
