// class GuaGame {
//   constructor (fps, images) {
//     this.images = images;
//     window.fps = fps;
//     this.actions = {};
//     this.keydowns = {};
//     this.scene = null;
//     this.canvas = document.getElementById('canvas');
//     this.context = this.canvas.getContext('2d');
//     init();
//   }
//   //游戏， canvas相当于画布，通过不断在画布上绘图实现游戏效果
//   //交互， 通过按键和鼠标点击实现交互，以事件的形式注册到game对象上
//   //通过定时器实现不断执行绘制代码
//   //首先要加载图片
//   //draw方法 确定要绘制的元素
//   //update，更新绘制元素状态
//   //runloop方法 定时器循环调用update draw方法
//
//   init () {
//     let g = this;
//     var loads = [];
//     var names = Object.keys(g.images);
//     for (var i = 0; i < names.length; i++) {
//       let name = names[i];
//       let path = images[name];
//       Image img = new Image()
//       img.src = path
//       img.onload = function () {
//         loads.push[1];
//         if(loads.length == names.length) {
//           g.__start()
//         }
//       }
//     }
//   }
//
//   update () {
//     this.scene.update();
//   }
//
//   draw () {
//     this.scene.draw();
//   }
//
//   runloop () {
//     var actions =
//   }
//
//   drawImage (img) = {
//     this.context.drawImage(img, img.widht, img.height);
//   }
// }

var log = function (msg) {
  console.log(msg);
}

var leftDown = false;
var rightDown = false;
var upDown = false;
var down = false;
var GuaGame = function() {
  var g = {
    actions: {},
    keydowns: {},
  };
  g.canvas = document.getElementById('canvas')
  g.context = g.canvas.getContext('2d');
  //event
  window.addEventListener('keydown', function(event) {
    g.keydowns[event.key] = true;
  })
  window.addEventListener('keyup', function(event) {
    g.keydowns[event.key] = false;
  })
  g.registerAction = function(key, callback) {
    g.actions[key] = callback;
  }
  //timer
  setInterval(function() {
    //update
    g.update();
    //clear
    g.context.clearRect(0,0,canvas.width,canvas.height);
    //draw
    g.draw();
  }, 1000/30);
  return g;
}
var imageFromPaht = function(path) {
  var img = new Image();
  img.src = path;
  return img;
}
var Hero = function(game) {
  var image = imageFromPaht('./img/hero.png');
  var o = {
    image: image,
    x: 100,
    y: 300,
    speed: 5,
  }
  image.onload = function() {
    o.width = o.image.width;
    o.height = o.image.height;
  }
  o.moveLeft = function() {
    if(o.x >= 0) {
      o.x -= o.speed;
    }
  }
  o.moveRight = function() {
    if(o.x <= (game.canvas.width - o.width)) {
      o.x += o.speed;
    }
  }
  o.moveUp = function() {
    if(o.y >= 0) {
      o.y -= o.speed;
    }
  }
  o.moveDown = function() {
    if(o.y <= game.canvas.height - o.height) {
      o.y += o.speed;
    }
  }
  return o;
}
var __main = function() {
  var game = GuaGame();
  var background = new Image();
  //怎样处理onload
  background.src = './img/background_gray.png';
  var hero = Hero(game);
  game.registerAction('a', function() {
    hero.moveLeft();
  });
  game.registerAction('d', function() {
    hero.moveRight();
  });
  game.registerAction('w', function() {
    hero.moveUp();
  });
  game.registerAction('s', function() {
    hero.moveDown();
  });
  //变相实现注册 就是在对象外面更改对象方法
  game.update = function() {
    // update(hero);
    var actions = Object.keys(game.actions);
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i];
      if (game.keydowns[key]) {
        game.actions[key]();
      }
    }
  }
  game.draw = function() {
    game.context.drawImage(background, 0, 0);
    game.context.drawImage(hero.image, hero.x, hero.y);
  }

}
__main();
