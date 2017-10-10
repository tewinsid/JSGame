var GuaGame = function(fps) {
  var g = {
    actions: {},
    keydowns: {},
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
  //timer
  window.fps = 30
  var runloop = function() {

    //enent input
    var actions = Object.keys(g.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (g.keydowns[key]) {
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
  setTimeout(function(){
    runloop()
  },1000/fps)
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

  return g
}
