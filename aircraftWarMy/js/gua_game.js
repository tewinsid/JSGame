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
