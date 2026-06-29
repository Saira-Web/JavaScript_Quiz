// questions.js — 4 categories, 10 questions each

export const questionBank = {
// 10 questions for the category "Beginner"
    beginner: [
        {
            question: "What does HTML stand for?",
            answers: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Markdown Language"],
            correct: "HyperText Markup Language"
        },
        {
            question: "Which tag creates the largest heading?",
            answers: ["<h1>", "<h6>", "<title>"],
            correct: "<h1>"
        },
        {
            question: "Which attribute sets the source of an image?",
            answers: ["src", "href", "link"],
            correct: "src"
        },
        {
            question: "Which language adds styling to a webpage?",
            answers: ["CSS", "HTML", "Python"],
            correct: "CSS"
        },
        {
            question: "Which symbol is used for comments in JavaScript?",
            answers: ["// comment", "# comment", "<!-- comment -->"],
            correct: "// comment"
        },
        {
            question: "Which method prints output to the console?",
            answers: ["console.log()", "document.write()", "alert()"],
            correct: "console.log()"
        },
        {
            question: "Which of these is a correct variable name?",
            answers: ["myValue", "2value", "value-1"],
            correct: "myValue"
        },
        {
            question: "What keyword declares a variable?",
            answers: ["let", "variable", "new"],
            correct: "let"
        },
        {
            question: "Which is NOT a JavaScript data type?",
            answers: ["Boolean", "Number", "Document"],
            correct: "Document"
        },
        {
            question: "How do you write a string in JavaScript?",
            answers: ['"Hello"', "Hello", "(Hello)"],
            correct: '"Hello"'
        }
    ],

// 10 questions for the category "Intermediate"
    intermediate: [
        {
            question: "Which keyword declares a constant?",
            answers: ["const", "let", "var"],
            correct: "const"
        },
        {
            question: "Which operator compares both value AND type?",
            answers: ["===", "==", "="],
            correct: "==="
        },
        {
            question: "What does DOM stand for?",
            answers: ["Document Object Model", "Data Object Method", "Display Object Manager"],
            correct: "Document Object Model"
        },
        {
            question: "Which method selects an element by ID?",
            answers: ["document.getElementById()", "document.query()", "document.id()"],
            correct: "document.getElementById()"
        },
        {
            question: "What is the correct syntax for an array?",
            answers: ["[1,2,3]", "{1,2,3}", "(1,2,3)"],
            correct: "[1,2,3]"
        },
        {
            question: "Which loop repeats a specific number of times?",
            answers: ["for loop", "while loop", "repeat loop"],
            correct: "for loop"
        },
        {
            question: "Which method adds an element at the end of an array?",
            answers: ["push()", "pop()", "shift()"],
            correct: "push()"
        },
        {
            question: "Which event listens for a click?",
            answers: ["click", "press", "tap"],
            correct: "click"
        },
        {
            question: "What does JSON stand for?",
            answers: [
                "JavaScript Object Notation",
                "Java Source Object Notation",
                "Java Syntax Oriented Network"
            ],
            correct: "JavaScript Object Notation"
        },
        {
            question: "Which method converts JSON text into an object?",
            answers: ["JSON.parse()", "JSON.stringify()", "JSON.decode()"],
            correct: "JSON.parse()"
        }
    ],

// 10 questions for the category "Pro"
    pro: [
        {
            question: "Which method removes the last element of an array?",
            answers: ["pop()", "shift()", "splice()"],
            correct: "pop()"
        },
        {
            question: "What does 'this' keyword refer to in an object method?",
            answers: ["The current object", "The window", "The parent class"],
            correct: "The current object"
        },
        {
            question: "Which function creates a Promise?",
            answers: ["new Promise()", "Promise.create()", "makePromise()"],
            correct: "new Promise()"
        },
        {
            question: "What is an arrow function?",
            answers: ["A shorter function syntax", "A function with arrows", "A CSS property"],
            correct: "A shorter function syntax"
        },
        {
            question: "Which statement handles errors?",
            answers: ["try...catch", "if...else", "throwError"],
            correct: "try...catch"
        },
        {
            question: "Which loop is best for arrays?",
            answers: ["for...of", "while", "switch"],
            correct: "for...of"
        },
        {
            question: "Which operator spreads array values?",
            answers: ["...", "::", "spread"],
            correct: "..."
        },
        {
            question: "What is an API?",
            answers: [
                "Application Programming Interface",
                "Applied Program Instance",
                "Automatic Program Integration"
            ],
            correct: "Application Programming Interface"
        },
        {
            question: "Which keyword starts a class?",
            answers: ["class", "object", "define"],
            correct: "class"
        },
        {
            question: "Which keyword creates a child class?",
            answers: ["extends", "super", "child"],
            correct: "extends"
        }
    ],

// 10 questions for the category "Advanced"
    advanced: [
        {
            question: "What is event bubbling?",
            answers: [
                "Event flows from child to parent",
                "Event flows from parent to child",
                "Event stops at the target"
            ],
            correct: "Event flows from child to parent"
        },
        {
            question: "What is a callback function?",
            answers: [
                "A function passed into another function",
                "A function with no parameters",
                "A function that returns another function"
            ],
            correct: "A function passed into another function"
        },
        {
            question: "What does async do?",
            answers: [
                "Allows use of await inside a function",
                "Runs code slower",
                "Creates multiple threads"
            ],
            correct: "Allows use of await inside a function"
        },
        {
            question: "Which keyword waits for a Promise?",
            answers: ["await", "pause", "wait"],
            correct: "await"
        },
        {
            question: "What does the ‘super’ keyword do?",
            answers: [
                "Calls the parent class constructor",
                "Creates a subclass",
                "Declares a variable"
            ],
            correct: "Calls the parent class constructor"
        },
        {
            question: "What is closure?",
            answers: [
                "A function remembering its outer variables",
                "A function that deletes variables",
                "An array of functions"
            ],
            correct: "A function remembering its outer variables"
        },
        {
            question: "Which method removes a specific element by index?",
            answers: ["splice()", "pop()", "remove()"],
            correct: "splice()"
        },
        {
            question: "What is hoisting?",
            answers: [
                "JavaScript moves declarations to the top",
                "Variables move to the bottom",
                "Functions cannot be called early"
            ],
            correct: "JavaScript moves declarations to the top"
        },
        {
            question: "What is recursion?",
            answers: [
                "A function calling itself",
                "A loop inside a loop",
                "A callback function"
            ],
            correct: "A function calling itself"
        },
        {
            question: "Which method fetches data from an API?",
            answers: ["fetch()", "request()", "load()"],
            correct: "fetch()"
        }
    ]
};