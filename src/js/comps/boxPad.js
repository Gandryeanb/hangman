class BoxPad extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene);
    this.scene = config.scene;
    this.alphabeth = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.answerPosArray = []
  }
  
  generate(gap, direction, answer) {
    
    var A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z;
    var stackAlphabeth = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
    var newRanNum = this.ranNum()
    var spawnZone;
    
    if (direction === 'left') {
      spawnZone = -40
    } else {
      spawnZone = window.innerWidth + 40
    }
    
    stackAlphabeth[newRanNum] = this.scene.physics.add.sprite(spawnZone, window.innerHeight/2 + gap, `box-${this.alphabeth[newRanNum]}`);
    if (direction === 'left') {
      stackAlphabeth[newRanNum].setGravityX(50)
    } else {
      stackAlphabeth[newRanNum].setGravityX(-50)
    }
    stackAlphabeth[newRanNum].displayWidth = window.innerHeight/100 * 6
    stackAlphabeth[newRanNum].displayHeight = stackAlphabeth[newRanNum].displayWidth
    
    stackAlphabeth[newRanNum].setInteractive();
    stackAlphabeth[newRanNum].on('pointerdown', () => {
      this.pressed (newRanNum)
      stackAlphabeth[newRanNum].destroy();
      pickedWord.push(this.alphabeth[newRanNum])
      emitter.emit(constant.PICK_WORD,this.alphabeth[newRanNum])
    }, this);
    
    this.add(stackAlphabeth[newRanNum])
    this.scene.add.existing(this)
    
    setTimeout(() => {
      stackAlphabeth[newRanNum].destroy()
    }, 5000)
  }
  
  ranNum() {
    return Math.floor(Math.random() * this.alphabeth.length)
  }
  
  pressed(num) {
    console.log(this.alphabeth[num]);
  }
  
  generateBlankBox(answer, pos) {
    
    var word1, word2, word3, word4, word5, word6, word7, word8, word9, word10;
    var tmpBlank = [word1, word2, word3, word4, word5, word6, word7, word8, word9, word10]
    var userdTmp = []
    var hintNumber = Math.floor(Math.random() * answer.length)
    
    for (let i = 0; i < answer.length; i++ ) {
      
      if (hintNumber !== i) {
        tmpBlank[i] = this.scene.add.image(this.answerPosArray[i].x, this.answerPosArray[i].y, `box-Blank`).setOrigin(0.5,  this.answerPosArray[i].laneBlock);
        tmpBlank[i].displayWidth = window.innerHeight/100 * 7
        tmpBlank[i].displayHeight = tmpBlank[i].displayWidth
        
        this.add(tmpBlank[i])
        userdTmp.push(tmpBlank[i])
      }
    }
    this.scene.add.existing(this)
  }
}
