// api.js
// Fetches questions from OpenTDB (Open Trivia Database).
// Exports fetchQuestions(level, amount)

export async function getWebDevQuestions(amount = 10, difficulty = "easy") {
  const url = `https://opentdb.com/api.php?amount=${amount}&type=multiple&difficulty=${difficulty}`;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch questions");
    const data = await res.json();
    return data.results.map(q => ({
      question: decodeHTML(q.question),
      correct: decodeHTML(q.correct_answer),
      answers: shuffleArray([...q.incorrect_answers.map(a => decodeHTML(a)), decodeHTML(q.correct_answer)])
    }));
  } catch (err) {
    console.error(err);
    return fallbackQuestions();
  }
}
function decodeHTML(html) {
  const txt = document.createElement("textarea");
  txt.innerHTML = html;
  return txt.value;
}

function shuffleArray(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

function fallbackQuestions() {
  return [
    {
      question: "Which keyword declares a constant in JavaScript?",
      correct: "const",
      answers: ["var", "let", "static", "const"]
    },
    {
      question: "Which method converts JSON string to object?",
      correct: "JSON.parse",
      answers: ["JSON.stringify", "JSON.parse", "parseJSON", "toObject"]
    }
  ];
}