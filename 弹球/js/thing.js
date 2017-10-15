//托盘对象
var Paddle = function(game) {
  //var image = imageFromePath('./img/board.jpg')
  var o = game.imageByName('paddle')
  o.speed = 15
  o.x = 100
  o.y = 250
  o.moveLeft = function() {
    o.x -= o.speed
    if (o.x < 0) {
      o.x = 0
    }
  }
  o.moveRight = function() {
    o.x += o.speed
    if (o.x > 400 - o.w) {
      o.x = 400 - o.w
    }
  }
  var aInb = function(x, x1, x2){
    return x >= x1 && x <= x2
  }
  o.collide = function(ball) {
    //判断两个矩形是否相交
    // if (ball.y + ball.h > o.y) {
    //   if (ball.x > o.x && ball.x < o.x + o.w) {
    //     log("相撞")
    //     return true
    //   }
    // }
    // return false
    var a = o
    var b = ball
    if (aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w) ) {
      if (aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
        return true
      }
    }
    return false
  }
  return o
}

var Ball = function(game) {
  var o = game.imageByName('ball')
  o.x = 100
  o.y = 200
  o.speedY = 5
  o.speedX = 5
  o.fired = false
  o.fire = function() {
    o.fired = true
  }
  o.move = function() {
    if (o.fired) {
      if (o.x < 0 || o.x > 400 - o.w) {
        o.speedX *= -1
      }
      if (o.y < 0 || o.y > 300 - o.h) {
        o.speedY *= -1
      }
      //move
      o.x += o.speedX
      o.y += o.speedY
    }
  }
  o.rebound = function() {
    o.speedY *= -1
  }
  o.hasPoint = function(x, y) {
    var xIn = x >= o.x && x <= o.x + o.w
    var yIn = y >= o.y && y <= o.y + o.h
    return xIn && yIn
  }
  return o
}
//block
var Block = function(game, position) {
  // position is [0,0] 格式
  var p = position
  //var image = imageFromePath('./img/wall.png')\
  var image = game.imageByName('block')
  var o = {
    img: image.img,
    x: p[0],
    y: p[1],
    alive: true,
    lifes: p[2] || 1,
  }
  o.w = image.w
  o.h = image.h

  o.kill = function() {
    o.lifes--
    if (o.lifes == '0') {
      o.alive = false
    }
  }
  o.collide = function(ball) {
    //判断两个矩形是否相交
    return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
  }
  return o
}
