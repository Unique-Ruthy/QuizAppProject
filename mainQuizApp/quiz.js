"use strict";

const questions = [
  {
    question:
      "Which programming language is often used for building web applications on the client side?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },

  {
    question: "What does the acronym 'HTTP' stand for in web development?",
    answers: [
      { text: "HyperText Transfer Protocol", correct: true },
      { text: "HyperText Transfer Process", correct: false },
      { text: "HyperText Transfer Page", correct: false },
      { text: "HyperText Type Protocol", correct: false },
    ],
  },

  {
    question:
      "Which version control system is widely used for tracking changes in source code during software development?",
    answers: [
      { text: "Git", correct: true },
      { text: "Subversion", correct: false },
      { text: "Mercurial", correct: false },
      { text: "CVS", correct: false },
    ],
  },

  {
    question: "What is the purpose of the 'if-else' statement in programming?",
    answers: [
      { text: "Loop control", correct: false },
      { text: "Exception handling", correct: false },
      { text: "Decision making", correct: true },
      { text: "Variable declaration", correct: false },
    ],
  },

  {
    question:
      "Which programming language is often used for building web applications on the client side?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "JavaScript", correct: true },
      { text: "C++", correct: false },
    ],
  },

  {
    question:
      "Which software development methodology emphasizes iterative and incremental development?",
    answers: [
      { text: "Executes the program", correct: false },
      { text: "Translates source code to machine code", correct: true },
      { text: "Manage memory allocation", correct: false },
      { text: "Handles user interface design", correct: false },
    ],
  },

  {
    question:
      "Which database model organizes data in tables with rows and columns?",
    answers: [
      { text: "Hierarchial", correct: false },
      { text: "Network", correct: false },
      { text: "Relational", correct: true },
      { text: "NoSQL", correct: false },
    ],
  },

  {
    question:
      "What is the purpose of the 'try-catch' block in exception handling?",
    answers: [
      { text: "Print debug messages", correct: false },
      { text: "Terminate the program", correct: false },
      { text: "Handle and recover from errors", correct: true },
      { text: "Execute conditional statements", correct: false },
    ],
  },

  {
    question:
      "Which software development practice aims to automate the process of software delivery and infrastructure changes?",
    answers: [
      { text: "Continuous Integration", correct: false },
      { text: "Text-Driven Development", correct: false },
      { text: "Continuous Deployment", correct: true },
      { text: "Pair Programming", correct: false },
    ],
  },

  {
    question:
      " Which protocol is commonly used for communication between a web browser and a web server?",
    answers: [
      { text: "FTP", correct: false },
      { text: "SMTP", correct: false },
      { text: "HTTP", correct: true },
      { text: "TCP/IP", correct: false },
    ],
  },
];

const questionBox = document.getElementById("question");
const answerBtn = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
const timeCount = document.getElementById("time");
const exitBtn = document.getElementById("exit-btn");

// VARIABLES
let currentQuestionIndex = 0;
let score = 0;
let questionNo;
let timeOut;

let timeDuration = 120;

// function resetTimer() {
//   clearTimeout(timeOut);
//   timeCount.innerHTML = "Time Left: 2:00";
//   timeDuration = 120;
// }

function startTime() {
  let timeValue = timeDuration;
  let updateTime = () => {
    const minutes = Math.floor(timeValue / 60);
    const seconds = timeValue % 60;
    timeCount.innerHTML = `Time Left: ${minutes}:${seconds}`;
    console.log(timeCount);
    if (timeValue === 0) {
      alert("Time up!");
      showScore();
    } else if (questionNo > 10) {
      showScore();
    } else {
      timeValue--;
      timeOut = setTimeout(updateTime, 1000);
    }
    //timeOut = setTimeout(updateTime, 1000); // set the timeout before calling updateTime
  };
  updateTime();
}

function startQuiz() {
  // clearTimeout(timeOut);
  currentQuestionIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";
  // resetTimer();
  showQuestion();
  startTime();
}

function showQuestion() {
  reset();
  let currentQuestion = questions[currentQuestionIndex];
  questionNo = currentQuestionIndex + 1;
  questionBox.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerBtn.appendChild(button);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    button.addEventListener("click", selectAnswer);
  });
}

function reset() {
  nextBtn.style.display = "none";

  while (answerBtn.firstChild) {
    answerBtn.removeChild(answerBtn.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerBtn.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextBtn.style.display = "block";
}

function showScore() {
  clearTimeout(timeOut);
  // resetTimer();
  reset();
  questionBox.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextBtn.innerHTML = "Try Again";
  nextBtn.style.display = "block";
  nextBtn.addEventListener("click", () => {
    window.location.reload();
  });
  exitBtn.style.display = "block";
  exitBtn.addEventListener("click", () => {
    window.location.assign("/index.html");
  });
}

function handleNextBtn() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}
nextBtn.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextBtn();
  } else {
    showScore();
  }
});
startQuiz();
