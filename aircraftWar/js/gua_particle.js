class GuaParticleSystem {
  constructor(game) {
    this.game = game
    this.setUp()
  }

  setUp() {
    this.x = 100
    this.y = 200
    this.numberOfParticle = 20
    this.particles = []
  }

  static new(game) {
    return new this(game)
  }

  draw() {
    for (var e of this.particles) {
      log(e.x, e.y)
      e.draw();
    }
  }

  update() {
    //添加火花
    if (this.particles.length < this.numberOfParticle) {
      var p = GuaParticle.new(this.game)
      var x = this.x
      var y = this.y
      var ax = randomBetween(-1, 1)
      var ay = randomBetween(-1, 1)
      p.init(x, y, ax, ay)
      this.particles.push(p)
    }
    //更新所有火花
    for (var e of this.particles) {
      e.update();
    }
  }

}

class GuaParticle extends GuaImage {
  constructor(game) {
    super(game, 'spark')
    this.setUp()
  }

  setUp() {
    // this.x = 10
    // this.y = 20
    // this.speed = 5
  }

  init(x, y, ax, ay) {
    this.x = x
    this.y = y
    this.ax = ax
    this.ay = ay
  }


  update() {
    super.update()
    this.x += this.vx
    this.y += this.vy
  }
}
