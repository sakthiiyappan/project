const quizData = [
  {
    question: "how many hands do you have",
    a: "10",
    b: "5",
    c: "7",
    d: "8",
    correct: "a",
  },
  {
    question: "SaaS meaning?",
    a: "Software as a sector",
    b: "Software as a service",
    c: "Service as a software",
    d: "Cars SUVs Sailboats",
    correct: "b",
    
  },
  {
    question: "which country's has largest population?",
    a: "Japan",
    b: "China",
    c: "India",
    d: "USA",
    correct: "c",
  },
  {
    question: "india's largest state?",
    a: "rajasthan",
    b: "1995",
    c: "tamilnadu",
    d: "none of the above",
    correct: "a",
  },
 {
    question: "old language in world?",
    a: "sanskrit",
    b: "English",
    c: "Tamil",
    d: "none of the above",
    correct: "c",
  },
];

const quiz = document.getElementById("quiz");
const answerElements = document.querySelectorAll(".answer");
const questionElement = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

const deselectAnswers = () => {
  answerElements.forEach((answer) => (answer.checked = false));
};

const getSelected = () => {
  let answer;
  answerElements.forEach((answerElement) => {
    if (answerElement.checked) answer = answerElement.id;
  });
  return answer;
};

const loadQuiz = () => {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];
  questionElement.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
};

loadQuiz();

submitButton.addEventListener("click", () => {
  const answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) score+=10;
    currentQuiz++;
    if (currentQuiz < quizData.length) loadQuiz();
    else {
      quiz.innerHTML = `
            <h2>You answered ${score}/50{quizData.length} questions correctly</h2>
            <button onclick="history.go(0)">Play Again</button>
        `;
    }
  }
});
