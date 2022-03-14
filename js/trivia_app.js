let questionsArr = [];
let index = 0;
let score = 0;

window.onload = function () {
  createAllQuestions();
  printQuestion();
  onClickAnswerBtn();
  onClickPlayAgainBtn();
  onClickStartGameBtn();
};

function createAllQuestions() {
  dataArr.forEach((item) => questionsArr.push(new Question(item.title, item.correcrAnswerIndex, item.answersArr)));
}

function printQuestion() {
  let title = document.querySelector("#question_h2_id");
  let btnArr = document.querySelectorAll(".answer_btn");

  title.innerHTML = questionsArr[index].title;

  for (let i = 0; i < btnArr.length; i++) {
    btnArr[i].style.background = `
    rgb(235, 205, 31)
    linear-gradient(
    90deg,
    rgba(235, 205, 31, 1) 0%,
    rgba(29, 29, 26, 1) 0%,
    rgba(27, 27, 25, 1) 100%,
    rgba(46, 46, 43, 1) 100%,
    rgba(23, 23, 22, 1) 100%,
    rgba(34, 34, 32, 1) 100%,
    rgba(83, 83, 78, 1) 100%,
    rgba(179, 179, 162, 1) 100%,
    rgba(199, 199, 198, 1) 100%)`;

    btnArr[i].value = i;
    btnArr[i].innerHTML = questionsArr[index].answersArr[i];
  }
}

function onClickStartGameBtn() {
  let startGameBtn = document.querySelector(".start_game_btn");

  startGameBtn.addEventListener("click", function () {
    document.querySelector(".start_game_div").style.display = "none";
    document.querySelector(".game_board").style.display = "block";
  });
}

function onClickAnswerBtn() {
  let btnArr = document.querySelectorAll(".answer_btn");

  btnArr.forEach((item) =>
    item.addEventListener("click", function () {
      if (questionsArr[index].checkAnswer(item.value)) {
        item.style.background = "green";
        score += 20;
      } else {
        item.style.background = "red";
      }

      index++;

      if (index < questionsArr.length) {
        setTimeout(printQuestion, 1500);
      } else {
        setTimeout(hideGameBoard, 1000);
      }
    })
  );
}

function onClickPlayAgainBtn() {
  let playAgainBtn = document.querySelector(".game_over_btn");

  playAgainBtn.addEventListener("click", function () {
    index = 0;
    score = 0;

    printQuestion();
    document.querySelector(".game_over_div").style.display = "none";
    document.querySelector(".game_board").style.display = "block";
  });
}

function hideGameBoard() {
  document.querySelector(".game_board").style.display = "none";
  document.querySelector("#game_over_h2_id").innerHTML = `${score}/100`;
  document.querySelector(".game_over_div").style.display = "block";
}
