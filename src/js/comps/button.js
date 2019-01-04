class Button extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.config = config
    this.scene = config.scene;
    this.keyTarget = config.key;
    this.posX = config.x;
    this.posY = config.y;
    this.originLoc = config.baseOrigin || 0.5
    this.w = config.w;
    this.h = config.h;
    this.event = config.event || false
    this.button = this.scene.add.image(this.posX, this.posY, this.keyTarget).setOrigin(this.originLoc, this.originLoc);
    this.button.displayWidth = this.w
    this.button.displayHeight = this.h
    if (this.event) {
      this.button.setInteractive()
      this.button.on('pointerdown', this.pressed, this)
    }
    this.messageButton = this.scene.add.text(this.posX, this.posY, config.text, {fontSize: 20, fill: '#000'}).setOrigin(this.originLoc, this.originLoc);
    this.add(this.button);
    this.scene.add.existing(this)
  }
  
  pressed() {
  }
}
