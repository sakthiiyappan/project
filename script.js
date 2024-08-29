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
    question: "the only teams have 5 IPL trophies?",
    a: "CSK & MI",
    b: "KKR & RR",
    c: "GT & DC",
    d: "PSK & SRH",
    correct: "a",
    
  },
  {
    question: "which number used in probability?",
    a: "1-2",
    b: "1-100",
    c: "0-1",
    d: "0-10",
    correct: "c",
  },
  {
    question: "which country did the oympicn originate?",
    a: "Greece",
    b: "Paris",
    c: "London",
    d: "China",
    correct: "a",
  },
 {
    question: "when were the first  winner oympic held?",
    a: "1930",
    b: "1925",
    c: "1924",
    d: "1947",
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
