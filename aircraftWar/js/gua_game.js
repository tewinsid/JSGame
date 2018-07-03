class GuaGame {
  constructor(fps, images, runcallback){
    window.fps = fps
    this.images = images
    this.runcallback = runcallback
    this.scene = null
    this.actions = {}
    this.keydowns = {}
    this.canvas = document.querySelector('#id-canvas')
    this.context = this.canvas.getContext('2d')

    var self = this
    window.addEventListener('keydown', function(event) {
      self.keydowns[event.key] = true
    })
    window.addEventListener('keyup', function(event) {
      self.keydowns[event.key] = false
    })
    this.init()
  }

  drawImage (img) {
    this.context.drawImage(img.texture, img.x, img.y)
  }

  update () {
    this.scene.update()
  }

  draw () {
    this.scene.draw()
  }

  registerAction (key, callback) {
    this.actions[key] = callback
  }
  //核心
  runloop () {
    var that = this
    var actions = Object.keys(this.actions)
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i]
      if (this.keydowns[key]) {
        //如果按键被按下，调用注册的action
        this.actions[key]()
      }
    }
    this.update()
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //draw
    this.draw()
    // next run loop
    setTimeout(function(){
      that.runloop()
    },1000/window.fps)
  }

  runWithScene (scene) {
    var that = this
    that.scene = scene
    log("当前运行场景" + that.scene)
    //开始运行
    setTimeout(function(){
      that.runloop()
    },1000/window.fps)

  }

  init () {
    var g = this
    var loads = []
    //预先载入所有图片
    var names = Object.keys(g.images)
    for (var i = 0; i < names.length; i++) {
      let name = names[i]
      var path = g.images[name]
      let img = new Image()
      img.src = path
      img.onload = function() {
        //存入g.image
        g.images[name] = img
        //所有图片都成功载入后，调用run
        loads.push(1)
        log('load images',loads.length, names.length)
        if (loads.length == names.length) {
          // log(g.images)
          g.__start()
        }
      }
    }
  }

  imageByName (name) {
    var image = this.images[name]
    // var img = {
    //   w: image.width,
    //   h: image.height,
    //   img: image,
    // }
    return image
  }

  __start ()  {
    this.runcallback(this)
  }

  replaceScene (scene) {
    this.scene = scene
  }

}
