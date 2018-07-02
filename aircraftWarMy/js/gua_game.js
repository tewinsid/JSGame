var log = function(msg) {
  console.log(msg);
}
var GuaGame = function() {
  var g = {
    actions: {},
    keydowns: {},
    pause: false,
    bullets: [],
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
    if (!g.pause) {
      g.update();
      g.context.clearRect(0, 0, canvas.width, canvas.height);
      g.draw();
    }
  }, 1000 / 30);
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
    speed: 5
  }
  // o.game = game;
  image.onload = function() {
    o.width = o.image.width;
    o.height = o.image.height;
  }
  o.moveLeft = function() {
    if (o.x >= 0) {
      o.x -= o.speed;
    }
  }
  o.moveRight = function() {
    if (o.x <= (game.canvas.width - o.width)) {
      o.x += o.speed;
    }
  }
  o.moveUp = function() {
    if (o.y >= 0) {
      o.y -= o.speed;
    }
  }
  o.moveDown = function() {
    if (o.y <= game.canvas.height - o.height) {
      o.y += o.speed;
    }
  }
  return o;
}
var Bullet = function(hero) {
  var image = imageFromPaht('./img/bullet.png');
  var o = {
    image: image,
  }
  image.onload = function() {
    o.width = o.image.width;
    o.height = o.image.height;
    o.x = hero.x + ((hero.width - o.width) / 2);
    o.y = hero.y - 25;
  }
  o.move = function() {
    o.y -= 5;
  }
  return o;
}
var Background = function() {
  var image = imageFromPaht('./img/background_gray.png');
  var o = {
    image: image,
  }
  return o;
}
var __main = function() {
  var game = GuaGame();
  var background = Background();
  var hero = Hero(game);
  var bullets = game.bullets;
  registerAllAction(game, hero);
  setInterval(function() {
    var bullet = Bullet(hero);
    bullets[bullets.length] = bullet;
  }, 1000 / 5);
  window.addEventListener('keydown', function(event) {
    if (event.key == 'p') {
      game.pause = !game.pause;
    }
  })
  game.update = function() {
    // update(hero);
    var actions = Object.keys(game.actions);
    for (var i = 0; i < actions.length; i++) {
      var key = actions[i];
      if (game.keydowns[key]) {
        game.actions[key]();
      }
    }
    for (var i = 0; i < bullets.length; i++) {
      var bulletTemp = bullets[i];
      bulletTemp.move();
      if (bulletTemp.y <= 0) {
        deleteBullet(i, bullets);
      }
    }
  }
  game.draw = function() {
    game.context.drawImage(background.image, 0, 0);
    game.context.drawImage(hero.image, hero.x, hero.y);
    for (var i = 0; i < bullets.length; i++) {
      var bulletTemp = bullets[i];
      game.context.drawImage(bulletTemp.image, bulletTemp.x, bulletTemp.y)
    }
  }
}
var deleteBullet = function(index, bullets) {
  for (var i = index; i < bullets.length; i++) {
    bullets[i] = bullets[i + 1];
  }
  bullets.length--;
}
var registerAllAction = function(game, hero) {
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
}
__main();
