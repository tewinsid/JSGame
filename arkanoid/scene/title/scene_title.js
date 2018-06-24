// var SceneTitle = function(game) {
//
//   var s = {
//     game: game,
//   }
//   s.draw = function() {
//     game.context.fillText('k键开始游戏', 100, 200);
//   }
//   s.update = function() {
//   }
//   // // var gameScene = SceneTitle(game)
//   // game.canvas.addEventListener('mousedown', function(event) {
//   //   var gameScene = Scene(game)
//   //   game.replaceScene(gameScene)
//   // })
//
//   game.registerAction('k', function() {
//     var scene = Scene(game)
//     game.replaceScene(scene)
//   })
//
//   return s
// }



class SceneTitle extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('k', function() {
      var scene = new Scene(game)
      game.replaceScene(scene)
    })
  }
  draw() {
    this.game.context.fillText('k键开始游戏', 100, 200);
  }
  //自定义new方法
  static new (game) {
    var i = new this(game)
    return i
  }
}
