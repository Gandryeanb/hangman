class AnswerBox extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.answer = config.answer.a;
    this.pos = config.pos;
    this.posAnswerBox = []
    this.alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    this.generateBox(this.answer)
  }
  
  generateBox(answer) {
    var laneUnit = 1
    var startPlacement
    var gapOdd = window.innerHeight / 100 * 7 / 2
    
    if (answer.length % 2 === 0) {
      startPlacement = 9
    } else {
      startPlacement = 8
      gapOdd = 0
    }
    
    for (var i = 0; i < answer.length; i++) {
      
      if (gapOdd === 0 && startPlacement === 13) {
        startPlacement = 8
        laneUnit = 0
        if (answer.length - i % 2 === 0 && answer.length - i <= 3) {
          startPlacement = 9
        }
      } 
      if (gapOdd === window.innerHeight / 100 * 7 / 2 && startPlacement === 13) {
        startPlacement = 9
        laneUnit = 0
        console.log(answer.length - i);
        if (answer.length - i <= 2) {
          startPlacement = 10
        }
      }
      
      var index = this.alphabeth.indexOf(answer[i])
      var answerBox = this.scene.add.image(this.pos.toPosX(startPlacement) - gapOdd, this.pos.toPosY(startPlacement), `box-${this.alphabeth[index]}`).setOrigin(0.5, laneUnit);
      answerBox.displayWidth = window.innerHeight / 100 * 7
      answerBox.displayHeight = answerBox.displayWidth
      this.add(answerBox)
      
      this.posAnswerBox.push({
        model: answerBox,
        char: answer[i],
        pos: {
          x: this.pos.toPosX(startPlacement) - gapOdd,
          y: this.pos.toPosY(startPlacement),
          lane: laneUnit
        }
      })
      startPlacement++
    }
    
    this.scene.add.existing(this)
  }
  
  listPosAnswer() {
    return this.posAnswerBox
  }
}
