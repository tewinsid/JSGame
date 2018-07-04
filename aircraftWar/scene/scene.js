class Scene extends GuaScene{
// var Scene = function(game) {
  constructor(game){
    super(game)
    this.setUp()
  }

  setUp() {
    //初始化
    game = this.game
    this.background = GuaImage.new(game, 'background');
    this.hero = GuaImage.new(game, 'hero')

    this.hero.x = 100
    this.hero.y = 200
    // this.blocks = loadLevel(game, 1)
    this.score = 0
    this.paused = false
    this.enableDrag = false // 拖拽flag
    var game = this.game
    var background = this.background
    var hero = this.hero
    // game.registerAction('a', function(){
    //   hero.moveLeft()
    // })
    // game.registerAction('d', function(){
    //   hero.moveRight()
    // })
    // game.registerAction('w', function(){
    //   hero.moveUp()
    // })
    // game.registerAction('s', function(){
    //   hero.moveDown()
    // })
    // game.registerAction('f', function(){
    //   ball.fire()
    // })
    // game.canvas.addEventListener('mousedown', function(event) {
    //   var x = event.offsetX
    //   var y = event.offsetY
    //   log(x, y,event)
    //   if (ball.hasPoint(x, y)) {
    //     //设置拖拽状态
    //     enableDrag = true
    //   }
    // })
    // game.canvas.addEventListener('mousemove', function(event) {
    //   var x = event.offsetX
    //   var y = event.offsetY
    //
    //   if (enableDrag) {
    //     log(x, y,'drag')
    //     ball.x = x
    //     ball.y = y
    //   }
    // })
    // game.canvas.addEventListener('mouseup', function(event) {
    //   var x = event.offsetX
    //   var y = event.offsetY
    //   log(x, y,'up')
    //   enableDrag = false
    // })

    this.addElements(this.background)
    this.addElements(this.hero)
  }



  // draw(){
  //   var game = this.game
  //   // game.context.fillStyle = '#000'
  //   // game.context.fillRect(0,0,400,300)
  //   // for (var i = 0; i < this.blocks.length; i++) {
  //   //   var block = this.blocks[i]
  //   //   if (block.alive) {
  //   //     game.drawImage(block)
  //   //   }
  //   // }
  //   game.context.fillText('分数:' + this.score, 10, 290);
  // }

  update() {
    var game = this.game
    var background = this.background
    var hero = this.hero
    var score = this.score
    if (this.paused) {
      return
    }
    //判读死亡 游戏结束
    // if (ball.y > paddle.y) {
    //   var end = new SceneEnd(game)
    //   game.replaceScene(end)
    // }
    // ball.move()
    //判断相撞
    // if (paddle.collide(ball)) {
    //   ball.rebound()
    // }

    // for (var i = 0; i < blocks.length; i++) {
    //   var block = blocks[i]
    //   //判断ball和墙相撞
    //   if (block.collide(ball)) {
    //       block.kill()
    //       ball.rebound()
    //       //更新分数
    //       score += 100
    //   }
    // }
  }
}
