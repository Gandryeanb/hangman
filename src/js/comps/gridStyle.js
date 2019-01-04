class Grid {
  constructor(config) {
    this.config = config;
    this.scene = config.scene;
    config.height = game.config.height;
    config.width = game.config.width;
    // this.sceneRatio = config.height/ config.width
    this.config.rows = 7;
    this.config.cols = 7;
    // this.config.cols = Math.floor(this.config.rows * this.sceneRatio);
    this.cw = config.width / config.rows;
    this.ch = config.height / config.cols;
    this.numberCordinate = []
  }
  
  show (isLineShow, isNumberShow) {
    this.graphics = this.scene.add.graphics();
    this.graphics.lineStyle(1, 0xff0000)
    
    if (isLineShow) {
      for ( var i = 0; i <= this.config.width; i += this.cw) {
        this.graphics.moveTo(i, 0);
        this.graphics.lineTo(i, this.config.height);
      }
      
      for ( var i = 0; i <= this.config.height; i += this.ch) {
        this.graphics.moveTo(0, i);
        this.graphics.lineTo(this.config.width, i);
      }
    }
    
      let counter = 0
      for ( var i = 0; i < this.config.cols; i++) {
        for ( var j = 0; j < this.config.rows; j++) {
        if (isNumberShow) {
          this.scene.add.text(this.cw * j + this.cw/2, this.ch * i + this.ch/2, counter, 0xff0000).setOrigin(.5,0.5)
        } 
          this.numberCordinate.push({ 
            x: this.cw * j,
            y: this.ch * i
          })
          counter++
        }
      }
    this.graphics.strokePath();
  }
  
  placeAt(xPos, yPos, target) {
    
    let xResult = xPos * this.cw;
    let yResult = yPos * this.ch;
    
    target.x = xResult
    target.y = yResult
  }
  
  showNumber () {
    let counter = 0
    for ( let i = 0; i < this.config.rows; i++) {
      for ( let j = 0; j < this.config.cols; j++) {
        let numberText = this.scene.add.text(0, 0, counter, { color: 0xff0000 })
        counter++
      } 
    }
  }
  
  toPosX(index) {
    return this.numberCordinate[index].x + this.cw/2
  }
  
  toPosY(index) {
    return this.numberCordinate[index].y + this.ch/2
  }
}
