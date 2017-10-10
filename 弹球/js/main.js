//原则 最外层只能有函数不能有变量 函数只能有一个入口
//把所有的代码放到入口初始化
//定义入口
var __main = function () {
  var score = 0
  //var log = console.log.bind(console)
  var game = GuaGame(60)
  var paddle = Paddle()
  var ball = Ball()
  blocks = loadLevel(1)

  paused = false
  game.registerAction('a', function(){
    paddle.moveLeft()
  })
  game.registerAction('d', function(){
    paddle.moveRight()
  })
  game.registerAction('f', function(){
    ball.fire()
  })

  enableDebugMode(true)

  game.update = function() {
    if (paused) {
      return
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
  game.draw = function() {
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
}
__main()
