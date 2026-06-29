// quiz.js
// This file handles quiz logic and fetching JS-related questions via API

// DOM references
const params = new URLSearchParams(window.location.search);
const level = params.get("level") || "beginner";

const levelDisplay = document.getElementById("level-display");
const questionBox = document.getElementById("question-box");
const answersBox = document.getElementById("answers-box");
const nextBtn = document.getElementById("next-btn");
const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");
const retryBtn = document.getElementById("retry-btn");
const menuBtn = document.getElementById("menu-btn");

let questions = [];
let index = 0;
let score = 0;

levelDisplay.textContent = `Level: ${level.toUpperCase()}`;

// ------------------ Helper functions ------------------

// Shuffle array
function shuffleArray(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Decode HTML entities from API
function decodeHTML(html) {
    const txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

// Map levels to OpenTDB difficulty
function mapLevelToDifficulty(lvl) {
    switch(lvl.toLowerCase()) {
        case "beginner": return "easy";
        case "intermediate": return "medium";
        case "pro":
        case "advanced": return "hard";
        default: return "easy";
    }
}

// JS question fallback
function fallbackJSQuestions(lvl) {
    const bank = {
        beginner: [
            { question: "Which keyword declares a variable?", correct: "let", answers: ["var","let","const"] },
            { question: "Which operator is used for strict equality?", correct: "===", answers: ["==","===","="] },
            { question: "Which method logs to the console?", correct: "console.log()", answers: ["alert()","console.log()","document.write()"] },
            { question: "Which symbol starts a single-line comment?", correct: "//", answers: ["//","#","<!--"] }
        ],
        intermediate: [
            { question: "Which method adds an element to the end of an array?", correct: "push()", answers: ["pop()","shift()","push()"] },
            { question: "Which method converts JSON text into an object?", correct: "JSON.parse()", answers: ["JSON.stringify()","JSON.parse()","JSON.decode()"] },
            { question: "Which method selects an element by ID?", correct: "document.getElementById()", answers: ["document.getElementById()","document.querySelectorAll()","getElement()"] }
        ],
        pro: [
            { question: "What does 'this' refer to in an object method?", correct: "the current object", answers: ["the current object","window","parent"] },
            { question: "Which function creates a Promise?", correct: "new Promise()", answers: ["new Promise()","Promise.create()","makePromise()"] },
            { question: "What is an arrow function?", correct: "A shorter function syntax", answers: ["A function with arrows","A shorter function syntax","A CSS property"] }
        ],
        advanced: [
            { question: "What is a closure?", correct: "A function remembering its outer variables", answers: ["A function remembering its outer variables","A function that deletes variables","An array of functions"] },
            { question: "What does 'async' allow?", correct: "Use of await inside a function", answers: ["Use of await inside a function","Runs code slower","Creates multiple threads"] },
            { question: "What is event bubbling?", correct: "Event flows from child to parent", answers: ["Event flows from child to parent","Event flows from parent to child","Event stops at target"] }
        ]
    };
    return bank[lvl.toLowerCase()] || bank.beginner;
}

// Fetch JS questions from OpenTDB
async function fetchJSQuestions(amount = 15, difficulty = "easy") {
    const url = `https://opentdb.com/api.php?amount=${amount}&category=18&type=multiple&difficulty=${difficulty}`;
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("API fetch failed");
        const data = await res.json();
        // Filter for JS-related questions
        let jsQuestions = data.results
            .map(q => ({
                question: decodeHTML(q.question),
                correct: decodeHTML(q.correct_answer),
                answers: shuffleArray([...q.incorrect_answers.map(a => decodeHTML(a)), decodeHTML(q.correct_answer)])
            }))
            .filter(q => q.question.toLowerCase().includes("javascript"));
        // If not enough JS questions, fill with fallback
        if (jsQuestions.length < 10) {
            jsQuestions = jsQuestions.concat(fallbackJSQuestions(level));
        }
        return jsQuestions.slice(0, 10);
    } catch (err) {
        console.error("Error fetching API questions:", err);
        return fallbackJSQuestions(level);
    }
}

// ------------------ Quiz logic ------------------

async function initQuiz() {
    questions = await fetchJSQuestions(10, mapLevelToDifficulty(level));
    index = 0;
    score = 0;

    resultScreen.classList.add("hidden");
    questionBox.classList.remove("hidden");
    answersBox.classList.remove("hidden");

    loadQuestion();
}

function loadQuestion() {
    nextBtn.classList.add("hidden");
    answersBox.innerHTML = "";

    const q = questions[index];
    questionBox.innerHTML = `<h3>Question ${index+1} of ${questions.length}</h3><p>${q.question}</p>`;

    q.answers.forEach(answer => {
        const btn = document.createElement("button");
        btn.textContent = answer;
        btn.classList.add("answer-btn");
        btn.addEventListener("click", () => handleAnswer(answer, q.correct));
        answersBox.appendChild(btn);
    });
}

function handleAnswer(selected, correct) {
    if (selected === correct) score++;

    nextBtn.classList.remove("hidden");

    document.querySelectorAll(".answer-btn").forEach(btn => {
        btn.disabled = true;
        if (btn.textContent === correct) btn.style.background = "#90EE90"; // correct green
        if (btn.textContent === selected && selected !== correct) btn.style.background = "#FFB6C1"; // wrong pink
    });
}

nextBtn.addEventListener("click", () => {
    index++;
    if (index >= questions.length) showResults();
    else loadQuestion();
});

retryBtn.addEventListener("click", initQuiz);
menuBtn.addEventListener("click", () => window.location.href = "index.html");

function showResults() {
    questionBox.classList.add("hidden");
    answersBox.classList.add("hidden");
    nextBtn.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    scoreText.textContent = `${score} / ${questions.length}`;
}

// Start quiz
initQuiz();