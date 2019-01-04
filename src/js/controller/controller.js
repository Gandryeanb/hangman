class Controller {
  constructor() {
    emitter.on(constant.SET_SCORE, this.setScore);
    emitter.on(constant.UP_SCORE, this.upScore);
  }
  
  setScore(val) {
    model.score = val
  }
  
  upScore(val) {
    var currentScore = model.score + val
    
    model.score = currentScore
    emitter.emit(constant.SCORE_UPDATED)
  }
}
