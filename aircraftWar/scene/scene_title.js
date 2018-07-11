class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)

    var ps = GuaParticleSystem.new(game)
    this.addElement(ps)
  }
}
