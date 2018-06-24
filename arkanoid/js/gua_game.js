var GuaGame = function(fps, images, runcallback) {
  // images 是一个对象里面是图片引用名和路径
  //程序会在所有图片载入后运行
  var g = {
    scene: null,
    actions: {},
    keydowns: {},
    images: {},
  }
  var canvas = document.querySelector('#id-canvas')
  var context = canvas.getContext('2d')
  g.canvas = canvas
  g.context = context

  g.drawImage = function(guaImage) {
    g.context.drawImage(guaImage.img, guaImage.x, guaImage.y)
  }
  //把按键状态存入kedowns对象中
  window.addEventListener('keydown', function(event) {
    g.keydowns[event.key] = true
  })
  window.addEventListener('keyup', function(event) {
    g.keydowns[event.key] = false
  })
  //注册模板
  g.registerAction = function(key, callback) {
    g.actions[key] = callback
  }
  //异步判断是否图片载入完成
  var loads = []
  //预先载入所有图片
  var names = Object.keys(images)
  for (var i = 0; i < names.length; i++) {
    let name = names[i]
    var path = images[name]
    let img = new Image()
    img.src = path
    img.onload = function() {
      //存入g.image
      g.images[name] = img
      //所有图片都成功载入后，调用run
      loads.push(1)
      log('load images',loads.length, names.length)
      if (loads.length == names.length) {
        log(g.images)
        g.run()
      }
    }
  }
  //
  g.update = function() {
    // log(g.scene)
    g.scene.update()

  }
  g.draw = function() {
    g.scene.draw()
  }
  //
  g.imageByName = function(name) {
    var image = g.images[name]

    var img = {
      w: image.width,
      h: image.height,
      img: image,
    }
    return img
  }
  //timer
  window.fps = 30
  var runloop = function() {
    //enent input
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
        //如果按键被按下，调用注册的action
        g.actions[key]()
      }
    }
    //update
    g.update()
    // judge x
    //clear
    context.clearRect(0, 0, canvas.width, canvas.height)
    //draw
    g.draw()
    // next run loop
    setTimeout(function(){
      runloop()
    },1000/window.fps)
  }

  g.runWithScene = function(scene) {
    g.scene = scene
    log(g.scene)
    //开始运行
    setTimeout(function(){

      runloop()
    },1000/fps)
  }
  //开始运行
  g.run = function() {
    runcallback(g)
    // log(g.sence)
  }
  g.replaceScene = function(scene) {
    g.scene = scene
    log(g.scene)
  }
  return g
}
// setInterval(function(){
//   //enent input
//   var actions = Object.keys(g.actions)
//   for (var i = 0; i < actions.length; i++) {
//     var key = actions[i]
//     if (g.keydowns[key]) {
//       g.actions[key]()
//     }
//   }
//   //update
//   g.update()
//   // judge x
//   //clear
//   context.clearRect(0, 0, canvas.width, canvas.height)
//   //draw
//   g.draw()
// },1000/fps)
