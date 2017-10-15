var log = console.log.bind(console)
// var e = sel => document.querySelector(sel)
// var log = function(s) {
//   e('#id-text-log').value += '\n' + s
// }
//引入图片
var imageFromePath = function(path) {
  var img = new Image()
  img.src = path
  return img
}
//判断相交
var rectIntersects = function(a,ball) {
  var o = a
  if (ball.y > o.y && ball.y < o.y + o.img.height) {
    if (ball.x > o.x && ball.x < o.x + o.img.width) {
      return true
    }
  }
  return false
}

var loadLevel = function(game,n) {
  n = n-1
  var level = levels[n]
  var blocks = []
  for (var i = 0; i < level.length; i++) {
    var p = level[i]
    var b = Block(game, p)
    blocks.push(b)
  }
  return blocks
}
//debug
var enableDebugMode = function(game, enable) {
  if (!enable) {
    return
  }
  window.addEventListener('keydown', function(event) {
    var k = event.key
    if (k == 'p') {
      //暂停
      paused = !paused
    } else if ('1234567'.includes(k)) {
      //调关
      blocks = loadLevel(game, Number(k))
    }
  })
  //控制速度
  document.querySelector('#id-input-speed').addEventListener('input',function(event){
    var input = event.target
    log(input.value)
    window.fps = Number(input.value)
  })
}
//
