const submitBtn = document.querySelector("#submitBtn");

const correctAnswers = ["C", "A", "A", "C", "C", "B", "B", "C", "C", "C"];
const userAnswer = {};

const answer = document.querySelectorAll(".answer");

const addAnswer = (e) => {
  userAnswer[e.target.name] = e.target.value.toUpperCase();
  //   console.log(userAnswer);
};

// console.log(answer);
answer.forEach((item) => {
  item.addEventListener("change", addAnswer);
});

const score = () => {
  let validAnswer = 0;
  //   for (let i = 0; i < correctAnswers.length; i++) {}
  //   console.log(Object.keys(userAnswer), userAnswer[Object.keys(userAnswer)]);
  for (const key in userAnswer) {
    if (userAnswer[key] == correctAnswers[key - 1].toUpperCase()) {
      validAnswer++;
    }
  }
  alert(`You got ${validAnswer} out of ${correctAnswers.length}`);
};

submitBtn.addEventListener("click", score);
