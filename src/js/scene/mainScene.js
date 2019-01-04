
class MainScene extends Phaser.Scene {
  constructor() {
    super('MainScene');
    this.alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  }
  preload() {
    this.load.image('ground', '../../../assets/msc/platform.png')
    this.load.image(`box-Blank`,`../../../assets/box/alphabeth-asset/Blank.png`)
    for (var i = 0; i < this.alphabeth.length; i++) {
      this.load.image(`box-${this.alphabeth[i]}`,`../../../assets/box/alphabeth-asset/${this.alphabeth[i]}.png`)
    }
  }
  create() {
    emitter = new Phaser.Events.EventEmitter();
    controller = new Controller();
    
    var grid = new Grid({scene: this})
    var box = new BoxPad({scene: this})
    
    grid.show(false, false)
    
    //display score player
    this.scoreBoxPlayer = new ScoreBox({
      scene: this,
      pos: grid
    })
    
    var bankAnswer = new BankAnswer()
    var getAnswer = bankAnswer.getAnswer()
    
    // display answerBox
    var answerBox = new AnswerBox({ scene: this, answer: getAnswer, pos: grid })
    
    // cover answerBox
    var blankBox = new BlankBox({ scene: this, answer: getAnswer, posAnswer: answerBox.listPosAnswer() })
    blankBox.generateBlankBox()
    
    // display question box
    var questionBox = new QuestionBox({ scene: this, grid: grid, question: getAnswer.q })
    questionBox.generateQuestion()
    
    // display timer
    this.timerCountDown = new Timer({
      scene: this,
      time: 120000,
      pos: grid
    })
    
    
    // timer reducer
    let timerCounter = setInterval(() => {
      emitter.emit(constant.DEC_TIME)
    }, 100)
    
    // listener to stop interval
    emitter.on(constant.STOP_DEC_TIME, () => {
      clearInterval(timerCounter)
    } , this)
    
    // display Hint button
    var hintButton = new Button({
      scene: this,
      key:'box-Blank',
      text: 'hint',
      baseOrigin: 0.5,
      x: grid.toPosX(47),
      y: grid.toPosY(47),
      w: 100,
      h: 50,
      event: 'pressed'
    })
    
    // display Pass button
    var passButton = new Button({
      scene: this,
      key:'box-Blank',
      text: 'Pass',
      baseOrigin: 0.5,
      x: grid.toPosX(43),
      y: grid.toPosY(43),
      w: 100,
      h: 50,
      event: ''
    })
    
    // display alphabeth Button
    var boxCreator1 = setInterval(() => {
      box.generate(50, 'left')  
    },1000 )
    
    var boxCreator2 = setInterval(() => {
      box.generate(window.innerHeight/100 * 5 * 1 + 60, 'right')
    },1000 )
    
    var boxCreator3 = setInterval(() => {
      box.generate(window.innerHeight/100 * 5 * 2 + 70, 'left')  
    },1000 )
    
    var boxCreator4 = setInterval(() => {
      box.generate(window.innerHeight/100 * 5 * 3 + 80, 'right')  
    },1000 )
    
  }
  update() {
    
  }
}
