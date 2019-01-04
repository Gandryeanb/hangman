class Timer extends Phaser.GameObjects.Container {
  constructor(config) {
    super(config.scene)
    this.scene = config.scene
    this.microSecond = config.time
    this.pos = config.pos
    this.textTime = this.scene.add.text(this.pos.toPosX(3), this.pos.toPosY(3), 'Time', {fontSize: 14, fill: '#fff'}).setOrigin(0.5,1);
    this.add(this.textTime)
    this.time = this.scene.add.text(this.pos.toPosX(3), this.pos.toPosY(3) + 20, this.toDateFormat(this.microSecond), {fontSize: 14, fill: '#fff'}).setOrigin(0.5,1);
    this.add(this.time)
    this.scene.add.existing(this)
    
    emitter.on(constant.DEC_TIME, () => {
      this.decTime()
    }, this)
  }
  
  decTime() {
    this.microSecond -= 60
    this.updateTime()
  }
  
  updateTime() {
    this.time.setText(this.toDateFormat(this.microSecond))
    if (this.microSecond <= 0) {
      emitter.emit(constant.STOP_DEC_TIME)
    }
  }
  
  toDateFormat(miliSecond) {
    
    var minute = 0
    for (var i = miliSecond; i >= 60000; i -= 60000 ) {
      minute++
      miliSecond -= 60000
    }
    
    var second = 0
    for (var i = miliSecond; i >= 1000; i -= 1000 ) {
      second++
      miliSecond -= 1000
    }
    
    if (minute < 10) {
      minute = `0 ${minute}`
    }
    
    if (second < 10) {
      second = `0 ${second}`
    }
    
    miliSecond = miliSecond / 10
    
    if (miliSecond < 10 ) {
      miliSecond = `0${miliSecond}`
    }
    
    let result = `${minute} : ${second} : ${miliSecond}`
    return result
  }
}
