// var SceneEnd = function(game) {
//
//   var s = {
//     game: game,
//   }
//   s.draw = function() {
//     game.context.fillText('游戏结束', 100, 290);
//   }
//   s.update = function() {
//   }
//   game.registerAction('r', function() {
//     var scene = new SceneTitle(game)
//     game.replaceScene(scene)
//   })
//   return s
// }
class SceneEnd extends GuaScene {
  constructor(game) {
    super(game)
    game.registerAction('r', function() {
      var scene = new SceneTitle(game)
      game.replaceScene(scene)
    })
  }
  draw() {
    this.game.context.fillText('r建开始游戏', 100, 200);
  }
}
