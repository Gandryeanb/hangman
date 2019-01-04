class BlankBox extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene)
    this.scene = config.scene
    this.answer = config.answer.a
    this.answerPos = config.posAnswer
    this.listBlankBox = []
    emitter.on(constant.PICK_WORD, this.wordChecker , this)
  }
  
  generateBlankBox() {
    
    var hintNum = Math.floor(Math.random() * this.answer.length)
    
    for ( var i = 0; i < this.answerPos.length; i++ ) {
      if (i !== hintNum) {
        if (this.answer[i] !== this.answer[hintNum]) {
          var blankBox = this.scene.add.image(this.answerPos[i].pos.x, this.answerPos[i].pos.y, `box-Blank`).setOrigin(0.5, this.answerPos[i].pos.lane);
          blankBox.displayWidth = window.innerHeight / 100 * 7
          blankBox.displayHeight = blankBox.displayWidth
          this.add(blankBox)
          
          this.listBlankBox.push({
            model: blankBox,
            char: this.answer[i]
          })
        }
      }
    }
    this.scene.add.existing(this)
  }
  
  wordChecker(s) {
    let sameWord = false
    let indexToDestroy = []
    
    for (var i = 0; i < this.listBlankBox.length; i++) {
      if (pickedWord[pickedWord.length -1] == this.listBlankBox[i].char) {
        if (!sameWord) {
          emitter.emit(constant.UP_SCORE, 100)
          sameWord = true
        }
        indexToDestroy.push(i)
      }
    }
    
    indexToDestroy = indexToDestroy.reverse()
    
    for (var i = 0; i < indexToDestroy.length; i++) {
      this.listBlankBox[indexToDestroy[i]].model.destroy()
      this.listBlankBox.splice(indexToDestroy[i], 1)
    }
    
    if (this.listBlankBox.length == 0) {
      this.scene.start('MainScene')
    }
  }
}
