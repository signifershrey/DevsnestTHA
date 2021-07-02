const questionsArray = [
  {
    name: " India's largest city by population",
    option1: "Delhi",
    option2: "Mumbai",
    option3: "Pune",
    option4: "Bangalore",
    answer: "Mumbai",
  },
  {
    name: "India is a federal union comprising twenty-nine states and how many union territories?",
    option1: "6",
    option2: "7",
    option3: "8",
    option4: "9",
    answer: "7",
  },
  {
    name: "What are the major languages spoken in Andhra Pradesh?",
    option1: " English and Telugu",
    option2: "Telugu and Urdu",
    option3: "Telugu and Kannada",
    option4: "All of the above languages",
    answer: "Telugu and Urdu",
  },
  {
    name: "What is the state flower of Haryana?",
    option1: "Lotus",
    option2: "Rhododendron",
    option3: "Golden Shower",
    option4: "Not declared",
    answer: "Rhododendron",
  },
  {
    name: " Where was the International Conference on 'Yoga for Diabetes' organized from January 4-6, 2017?",
    option1: "New Delhi ",
    option2: "Jharkhand",
    option3: "Jammu and Kashmir",
    option4: "Haryana",
    answer: "New Delhi ",
  },
];

const quizArea = document.querySelector(".quiz-area");
const question = document.querySelector(".ques");
const option1 = document.querySelector("#option1");
const option2 = document.querySelector("#option2");
const option3 = document.querySelector("#option3");
const option4 = document.querySelector("#option4");
const options = document.querySelectorAll(".option");



let score = 0;
let count = 0;
let currentQuestion = {};
let render = () => {
  currques = questionsArray[count];
  question.innerHTML = currentQuestion.que;
  option1.innerHTML = currentQuestion.option1;
  option2.innerHTML = currentQuestion.option2;
  option3.innerHTML = currentQuestion.option3;
  option4.innerHTML = currentQuestion.option4;
};

let flag = false;

options.forEach((option) => {
  option.addEventListener("click", (e) => {
    if (!flag) {
      if (e.target.innerHTML === currentQuestion.answer) {
        e.target.classList.add("correct");
        score++;
      } else {
        if (!e.target.classList.contains("correct")) {
          e.target.classList.add("wrong");
        }
      }
    }
  });
});

render();

let nextBtnClicked = 1
const nextBtn = document.querySelector(".btn");

nextBtn.addEventListener("click", () => {
  flag = false;
    nextBtnClicked++;
    
//   if (submitClicked > questionsArray) {
//     alert(`Your score is ${score}`);
//     location.reload();
//     }
    
  options.forEach((option) => {
    option.classList.remove("correct");
    option.classList.remove("wrong");
  });
  render();
});