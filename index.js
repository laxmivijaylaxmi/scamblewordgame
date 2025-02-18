const words = [
    { word: "javascript", hint: "Programming language for the web" },
    { word: "developer", hint: "Someone who writes code" },
    { word: "function", hint: "A reusable block of code" },
    { word: "variable", hint: "Used to store data in programming" },
    { word: "browser", hint: "Software used to access the internet" },
    { word: "string", hint: "A sequence of characters in programming" },
    { word: "python", hint: "A popular high-level programming language" },
    { word: "android", hint: "A mobile operating system developed by Google" },
    { word: "database", hint: "A structured collection of data" },
    { word: "react", hint: "A JavaScript library for building UI" },
    { word: "frontend", hint: "The part of a website users interact with" },
    { word: "backend", hint: "The server-side of a web application" },
    { word: "nodejs", hint: "JavaScript runtime environment for servers" },
    { word: "github", hint: "A platform for hosting and sharing code" },
    { word: "css", hint: "Used for styling web pages" },
    { word: "html", hint: "The standard language for creating web pages" },
    { word: "debugging", hint: "The process of fixing errors in code" },
    { word: "algorithm", hint: "A step-by-step solution to a problem" },
    { word: "framework", hint: "A pre-built structure for software development" },
    { word: "compiler", hint: "A program that translates code into machine language" },
    { word: "cloud", hint: "Internet-based computing services" },
    { word: "encryption", hint: "Securing data using cryptography" },
    { word: "cookie", hint: "Small data stored by websites in browsers" },
    { word: "server", hint: "A computer that provides data to other computers" },
    { word: "array", hint: "A collection of elements stored in order" },
    { word: "object", hint: "A data structure with properties and methods" },
    { word: "loop", hint: "A programming structure that repeats a block of code" },
    { word: "boolean", hint: "A data type with true or false values" },
    { word: "json", hint: "A lightweight format for data exchange" },
    { word: "sql", hint: "A language used to manage databases" }
];


let correctWord = "";
let score = 0;
let timeLeft = 30;
let timer;
let play = false;

const msg = document.querySelector(".msg");
const inputField = document.querySelector("input");
const btn = document.querySelector(".btn");
const timerDisplay = document.querySelector(".timer"); 

// Function to start the timer
const startTimer = () => {
    timeLeft = 30; 
    timerDisplay.innerHTML = `Time Left: ${timeLeft}s`;

    timer = setInterval(() => {
        timeLeft--;
        timerDisplay.innerHTML = `Time Left: ${timeLeft}s`;

        if (timeLeft === 0) {
            clearInterval(timer);
            msg.innerHTML = `Time's up! The correct word was <b>${correctWord}</b>.`;
            btn.innerHTML = "Play Again";
            play = false;
        }
    }, 1000);
};

// Function to start the game
const startGame = () => {
    let randomObj = words[Math.floor(Math.random() * words.length)];
    correctWord = randomObj.word;
    msg.innerHTML = `Hint: <b>${randomObj.hint}</b>`; 
    inputField.value = "";
    inputField.classList.remove("hidden");

   
    clearInterval(timer);
    startTimer();
};


btn.addEventListener("click", function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        startGame();
    } else {
        let userGuess = inputField.value.trim().toLowerCase();
        if (userGuess === correctWord) {
            clearInterval(timer);
            score++;
            msg.innerHTML = `Correct! The word was <b>${correctWord}</b>. Your score: ${score}`;
            btn.innerHTML = "Play Again";
            play = false;
        } else {
            msg.innerHTML = `Wrong! Try again.`;
        }
    }
});



//     return word.split("").sort(()=>Math.random() -0.5).join("")
// }

// function startGame(){
//     let randomIndex = Math.floor(Math.random() * words.length)
//     correctWord = words[randomIndex].word;
//     scrambleWord= scramble(correctWord);
//     msg.innerHTML = `Guess the word:<strong>{scrambleWord}</strong> <br> Hint: ${words[randomIndex].hint}`;
//     inputField.classList.remove("hidden");
//     inputField.value ="";
//     inputField.focus();

//     startTimer();
// }

// function startTimer(){
//     clearInterval(timer);
//     timeLeft = 30;
//     document.querySelector(".timer").textContent =`Time Left:${timeLeft}s`;

//     timer = setInterval (()=>{
//         timeLeft--;
//         document.querySelector(".timer").textContent= `Time Left: ${timeLeft}s`;
//         if (timeLeft === 0) {
//             clearInterval(timer);
//             msg.innerHTML = `Time's up! The correct word was <strong>${correctWord}</strong>.`;
//             btn.textContent = "Play Again";
//             inputField.classList.add("hidden");
//         }
//     }, 1000);
// }
// function checkAnswer() {
//     let userWord = inputField.value.trim().toLowerCase();
//     if (userWord === correctWord) {
//         score++;
//         msg.innerHTML = `🎉 Correct! The word was <strong>${correctWord}</strong>. Your score: ${score}`;
//         btn.textContent = "Next Word";
//         clearInterval(timer);
//         inputField.classList.add("hidden");
//     } else {
//         msg.innerHTML = `❌ Wrong! Try again.`;
//     }
// }

// btn.addEventListener("click", function() {
//     if (btn.textContent === "click here to start" || btn.textContent === "Next Word" || btn.textContent === "Play Again") {
//         startGame();
//     } else {
//         checkAnswer();
//     }
// });