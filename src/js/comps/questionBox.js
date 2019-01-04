class QuestionBox extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.pos = config.grid
    this.question = config.question;
  }
  
  generateQuestion() {
    var questionBox = this.scene.add.image(this.pos.toPosX(17), this.pos.toPosY(17) + 35, `box-Blank`).setOrigin(0.5, 0.5);
    questionBox.displayWidth = window.innerWidth / 100 * 80
    questionBox.displayHeight = window.innerHeight / 100 * 20
    this.add(questionBox)
    
    var text = this.scene.add.text(this.pos.toPosX(17), this.pos.toPosY(17) + 35, this.question,  { fontSize: 20, fill: '#000' }).setOrigin(0.5, 0.5);
    this.add(text)
    
    this.scene.add.existing(this)
  }
}
