//托盘对象
var Paddle = function() {
  var image = imageFromePath('./img/board.jpg')
  var o ={
    img: image,
    x: 100,
    y: 200,
    speed: 4,
  }
  o.moveLeft = function() {
    o.x -= o.speed
    if (o.x < 0) {
      o.x = 0
    }
  }
  o.moveRight = function() {
    o.x += o.speed
    if (o.x > 400 - o.img.width) {
      o.x = 400 - o.img.width
    }
  }
  o.collide = function(ball) {
    //判断两个矩形是否相交
    if (ball.y + ball.img.height > o.y) {
      if (ball.x > o.x && ball.x < o.x + o.img.width) {
        return true
      }
    }
    return false
  }
  return o
}
var Ball = function() {
  var image = imageFromePath('./img/ball.jpg')
  var o = {
    img: image,
    x: 100,
    y: 200,
    speedX: 5,
    speedY: 5,
    fired: false,
  }
  o.fire = function() {
    o.fired = true
  }
  o.move = function() {
    if (o.fired) {
      if (o.x<0 || o.x>400) {
        o.speedX *= -1
      }
      if (o.y<0 || o.y>300) {
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
  return o
}
//wall
var Block = function() {
  var image = imageFromePath('./img/wall.png')
  var o = {
    img: image,
    x: 100,
    y: 100,
    w: 25,
    h: 25,
    alive: true,
  }
  o.kill = function() {
    o.alive = false
  }
  o.collide = function(ball) {
    //判断两个矩形是否相交
    return o.alive && (rectIntersects(o, ball) || rectIntersects(ball, o))
  }
  return o
}
