class Question {
  constructor(_title, _correcrAnswerIndex, _answersArr) {
    this.title = _title;
    this.correcrAnswerIndex = _correcrAnswerIndex;
    this.answersArr = _answersArr;
  }

  checkAnswer(_answerIndex) {
    if (_answerIndex == this.correcrAnswerIndex) {
      return true;
    } else {
      return false;
    }
  }
}
