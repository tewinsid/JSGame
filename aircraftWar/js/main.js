//原则 最外层只能有函数不能有变量 函数只能有一个入口
//把所有的代码放到入口初始化
//定义入口

var __main = function (){
  var images = {
    hero: './img/hero.jpg',
    bullet: './img/bullet.jpg',
    backgroud: './img/backgroud_gray.png',
    enemy: './img/enemy1.png',
  }


  //var log = console.log.bind(console)
  var game = GuaGame(60, images,function(g) {
    var scene = new SceneTitle(g)
    log(scene + "初始化成功")
    g.runWithScene(scene)
  })
  enableDebugMode(game, true)
}
__main()
