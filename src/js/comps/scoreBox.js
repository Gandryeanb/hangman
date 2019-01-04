class ScoreBox extends Phaser.GameObjects.Container {
  constructor(config) {
    
    super(config.scene);
    this.scene = config.scene;
    this.pos = config.pos;
    
    this.textLeft = this.scene.add.text(this.pos.toPosX(1), this.pos.toPosY(1), 'P1 SCORE', {fontSize: 14, fill: '#fff'}).setOrigin(0.5,0.5);
    this.add(this.textLeft);
    this.scoreLeft = this.scene.add.text(this.pos.toPosX(1), this.pos.toPosY(1) + 20, '0', {fontSize: 14, fill: '#fff'}).setOrigin(0.5,0.5);
    this.add(this.scoreLeft);
    this.textRight = this.scene.add.text(this.pos.toPosX(5), this.pos.toPosY(5), 'SCORE P2', {fontSize: 14, fill: '#fff'}).setOrigin(0.5,0.5);
    this.add(this.textRight);
    this.scoreRight = this.scene.add.text(this.pos.toPosX(5), this.pos.toPosY(5) + 20, '0', {fontSize: 14, fill: '#fff'}).setOrigin(0.5,0.5);
    this.add(this.scoreRight);
    
    this.scene.add.existing(this);
    
    emitter.on(constant.SCORE_UPDATED, this.refreshScore,this)
  }
  
  refreshScore() {
    this.scoreLeft.setText(model.score)
    this.scoreRight.setText(model.score)
  }
}
