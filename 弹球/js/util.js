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
