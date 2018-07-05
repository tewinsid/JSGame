class GuaScene {
  constructor(game) {
    this.game = game
    this.elements = []
  }
  draw() {
    // log(this.elements)
    for(var i=0; i < this.elements.length; i++) {
      this.game.drawImage(this.elements[i]);
    }
  }
  addElement(element) {
    //去掉耦合在父类中吧场景注册到img中
    element.scene = this
    this.elements.push(element)
  }
  update(){
    for(var i=0; i < this.elements.length; i++) {
      this.elements[i].update()
    }
  }
}
