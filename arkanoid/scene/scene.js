class Scene extends GuaScene{
// var Scene = function(game) {
  constructor(game){
    super(game)
    //初始化
    this.paddle = Paddle(game)
    this.ball = Ball(game)
    this.blocks = loadLevel(game, 1)
    this.score = 0
    this.paused = false
    this.enableDrag = false // 拖拽flag
    game.registerAction('a', function(){
      paddle.moveLeft()
    })
    game.registerAction('d', function(){
      paddle.moveRight()
    })
    game.registerAction('f', function(){
      ball.fire()
    })
    game.canvas.addEventListener('mousedown', function(event) {
      var x = event.offsetX
      var y = event.offsetY
      log(x, y,event)
      if (ball.hasPoint(x, y)) {
        //设置拖拽状态
        enableDrag = true
      }
    })
    game.canvas.addEventListener('mousemove', function(event) {
      var x = event.offsetX
      var y = event.offsetY

      if (enableDrag) {
        log(x, y,'drag')
        ball.x = x
        ball.y = y
      }
    })
    game.canvas.addEventListener('mouseup', function(event) {
      var x = event.offsetX
      var y = event.offsetY
      log(x, y,'up')
      enableDrag = false
    })
  }
  draw(){
    game.context.fillStyle = '#000'
    game.context.fillRect(0,0,400,300)
    game.drawImage(paddle)
    game.drawImage(ball)
    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      if (block.alive) {
        game.drawImage(block)
      }
    }
    game.context.fillText('分数:' + score, 10, 290);
  }


  update() {
    if (this.paused) {
      return
    }
    //判读死亡 游戏结束
    if (thsball.y > paddle.y) {
      var end = new SceneEnd(game)
      game.replaceScene(end)
    }
    ball.move()
    //判断相撞
    if (paddle.collide(ball)) {
      ball.rebound()
    }

    for (var i = 0; i < blocks.length; i++) {
      var block = blocks[i]
      //判断ball和墙相撞
      if (block.collide(ball)) {
          block.kill()
          ball.rebound()
          //更新分数
          score += 100
      }
    }
  }
  static new(game) {
    var i = new this(game)
    return i
  }
}
